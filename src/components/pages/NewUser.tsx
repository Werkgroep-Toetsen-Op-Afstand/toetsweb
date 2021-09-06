import React, {FunctionComponent, useState} from 'react';
import {Input, Option, Page, RequiredRule, useForm, useLocalization, translate, renderErrors} from 'react-ts-boiler';
import Lang from '../../utils/Localization';
import Button from '../layout/Button';
import Select from '../layout/Select';
import Card from '../layout/Card';

interface UserForm {
    username?: string;
    password?: string;
    gender?: string;
}

const ContainsUppercaseCharacter = (value: string, field: string) => {
    if(value === '' || value.match(/[A-Z]/) !== null) {
        return '';
    }

    return translate('validation.containsUppercaseChar', translate(field));
};

const ContainsNumber = (value: string, field: string) => {
    if(value === '' || value.match(/[0-9]/) !== null) {
        return '';
    }

    return translate('validation.containsNumber', translate(field));
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

    return (
        <Page className={'new-user-page'}>
            <Card className={'new-user-page__form'}>
                <div>
                    <div>
                        <Input value={form.data.username} onChange={onFormChange} id={'username'} />
                    </div>
                </div>

                <br />

                <div>
                    <div>
                        <Input value={form.data.password} onChange={onFormChange} id={'password'} type={'password'} />
                    </div>
                </div>

                <br />

                <div>
                    <div>
                        <Select onChange={onFormChange} placeholder={__('gender')} value={form.data.gender} id={'gender'}>
                            <Option value={'male'}>{ __('male') }</Option>
                            <Option value={'female'}>{ __('female') }</Option>
                        </Select>
                    </div>

                    { /* renderErrors(form.errors.gender ?? []) */ }
                </div>

                <br />

                <div className={'new-user-page__actions'}>
                    <Button onClick={submit} disabled={!form.valid}>{ __('save') }</Button>
                    <Button onClick={switchLocale}>{ __('changeLocale') }</Button>
                    <Button onClick={form.clear}>{ __('clearForm') }</Button>
                </div>

                { submitted &&
                    <div>
                        <p>Username: { form.data.username }</p>
                        <p>Password: { form.data.password }</p>
                        <p>Gender: { form.data.gender }</p>
                    </div>
                }
            </Card>

            <Card>
                { renderErrors(form.errors, (key, errors) => {
                    if(!errors.length) {
                        return <React.Fragment />
                    }

                    return (
                        <div className={'new-user-page__error'}>
                            <p className={'new-user-page__error-title'}>{ __(key) }</p>

                            <ul key={key}>
                                {errors.map((error: string, index: number) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    );
                }) }
            </Card>
        </Page>
    );
};

export default NewUser;
