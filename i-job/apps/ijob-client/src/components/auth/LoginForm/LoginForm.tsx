import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
// import { useAppDispatch } from '@app/hooks/reduxHooks';
// import { doLogin } from '@app/store/slices/authSlice';
// import { notificationController } from '@app/controllers/notificationController';
import { ReactComponent as FacebookIcon } from '@app/assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '@app/assets/icons/google.svg';
import * as S from './LoginForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const initValues: LoginFormData = {
  email: 'hello@altence.com',
  password: 'some-test-pass',
};

export const LoginForm: React.FC = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();
  //   const { t } = useTranslation();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: LoginFormData) => {
    // setLoading(true);
    // dispatch(doLogin(values))
    //   .unwrap()
    //   .then(() => navigate('/'))
    //   .catch((err: any) => {
    //     notificationController.error({ message: err.message });
    //   });
    setLoading(false);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <Auth.FormTitle>התחברות</Auth.FormTitle>
        <S.LoginDescription>לוגין נאלח</S.LoginDescription>
        <Auth.FormItem
          name="email"
          label="איימל"
          rules={[
            { required: true, message: 'ddd' },
            {
              type: 'email',
              message: 'email',
            },
          ]}
        >
          <Auth.FormInput placeholder={'email'} />
        </Auth.FormItem>
        <Auth.FormItem
          label={'סיסמא'}
          name="password"
          rules={[{ required: true, message: 'שדה חובה' }]}
        >
          <Auth.FormInputPassword placeholder={'common.password'} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <BaseForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{'login.rememberMe'}</S.RememberMeText>
            </Auth.FormCheckbox>
          </BaseForm.Item>
          <Link to="/auth/forgot-password">
            <S.ForgotPasswordText>{'common.forgotPass'}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            {'common.login'}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <GoogleIcon />
            </Auth.SocialIconWrapper>
            {'login.googleLink'}
          </Auth.SocialButton>
        </BaseForm.Item>
        <BaseForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <FacebookIcon />
            </Auth.SocialIconWrapper>
            {'login.facebookLink'}
          </Auth.SocialButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {'login.noAccount'}{' '}
            <Link to="/auth/sign-up">
              <Auth.LinkText>{'common.here'}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
