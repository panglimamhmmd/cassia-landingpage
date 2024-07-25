import { useState } from 'react';
import { notification } from 'antd';

interface IValues {
    name: string;
    email: string;
    message: string;
}

const initialValues: IValues = {
    name: '',
    email: '',
    message: '',
};

export const useForm = (validate: { (values: IValues): IValues }) => {
    const [formState, setFormState] = useState<{
        values: IValues;
        errors: IValues;
    }>({
        values: { ...initialValues },
        errors: { ...initialValues },
    });

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const values = formState.values;
        const errors = validate(values);
        setFormState((prevState) => ({ ...prevState, errors }));

        const url = 'https://api.sheetmonkey.io/form/a61DKS8qLWXMs14kfji928'; // Fill in your API URL here

        try {
            if (Object.values(errors).every((error) => error === '')) {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    notification['error']({
                        message: 'Error',
                        description:
                            'There was an error sending your message, please try again later.',
                    });
                } else {
                    event.target.reset();
                    setFormState(() => ({
                        values: { ...initialValues },
                        errors: { ...initialValues },
                    }));

                    notification['success']({
                        message: 'Success',
                        description: 'Your message has been sent!',
                    });

                    const redirectUrl =
                        'https://wa.me/6287846471598?text=I%20am%20interested%20in%20your%20Property%20for%20sale';
                    window.open(redirectUrl, '_blank');
                }
            }
        } catch (error) {
            notification['error']({
                message: 'Error',
                description: 'Failed to submit form. Please try again later.',
            });
        }
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        event.persist();
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: value,
            },
            errors: {
                ...prevState.errors,
                [name]: '',
            },
        }));
    };

    return {
        handleChange,
        handleSubmit,
        values: formState.values,
        errors: formState.errors,
    };
};
