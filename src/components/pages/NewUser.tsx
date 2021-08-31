import React, {FunctionComponent, useState} from 'react';
import {Input, Option, Page, RequiredRule, Select, useForm, useLocalization } from 'react-ts-boiler';
import Lang from '../../utils/Localization';

interface UserForm {
    username?: string;
    password?: string;
    gender?: string;
}

const ContainsUppercaseCharacter = (value: string) => {
    if(value === '' || value.match(/[A-Z]/) !== null) {
        return '';
    }

    return 'Wachtwoord moet een hoofdletter bevatten!';
};

const ContainsNumber = (value: string) => {
    if(value === '' || value.match(/[0-9]/) !== null) {
        return '';
    }

    return 'Wachtwoord moet een nummer bevatten!';
};

const NewUser: FunctionComponent = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const { setLocale, locale, __ } = useLocalization();

    const [form, onFormChange] = useForm<UserForm>({}, {
        username: [RequiredRule],
        password: [RequiredRule, ContainsUppercaseCharacter, ContainsNumber],
        gender: [RequiredRule],
    });

    const submit = () => {
        setSubmitted(true);
    };

    const switchLocale = () => {
        if(locale === Lang.NL) {
            setLocale(Lang.EN);
        } else {
            setLocale(Lang.NL);
        }
    };

    const renderErrors = (errors: string[]) => {
        return (
            <ul style={{ marginLeft: 20 }}>
                { errors.map((error, index) => (
                    <li key={index}>{ error }</li>
                )) }
            </ul>
        );
    };

    return (
        <Page className={'new-user-page'}>
            <div style={{ display: 'flex', alignSelf: 'center' }}>
                <div>
                    <Input value={form.data.username} onChange={onFormChange} id={'username'} />
                </div>

                { renderErrors(form.errors.username ?? []) }
            </div>

            <br />

            <div style={{ display: 'flex', alignSelf: 'center' }}>
                <div>
                    <Input value={form.data.password} onChange={onFormChange} id={'password'} type={'password'} />
                </div>

                { renderErrors(form.errors.password ?? []) }
            </div>

            <br />

            <div>
                <div>
                    <Select onChange={onFormChange} placeholder={__('sex')} value={form.data.gender} id={'gender'}>
                        <Option value={'male'}>{ __('male') }</Option>
                        <Option value={'female'}>{ __('female') }</Option>
                    </Select>
                </div>

                { renderErrors(form.errors.gender ?? []) }
            </div>

            <br />

            <div>
                <button onClick={submit} disabled={!form.valid}>{ __('save') }</button>
                <button onClick={switchLocale}>{ __('changeLocale') }</button>
                <button onClick={form.clear}>{ __('clearForm') }</button>
            </div>

            { submitted &&
                <div>
                    <p>Username: { form.data.username }</p>
                    <p>Password: { form.data.password }</p>
                    <p>Gender: { form.data.gender }</p>
                </div>
            }
        </Page>
    );
};

export default NewUser;
