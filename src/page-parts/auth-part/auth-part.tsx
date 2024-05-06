import React, { useState } from "react";
import "./auth-part.css";
import { Space } from "antd";
import PrimaryButton from "../../components/atomics/primary-button/primary-button";
import Divider from "../../components/atomics/divider/divider";
import SecondaryButton from "../../components/atomics/secondary-button/secondary-button";
import { GoogleOutlined } from '@ant-design/icons';
import LogInModal from "../../components/modals/log-in-modal/log-in-modal";
import { useTranslation } from "react-i18next";

const AuthPart = () => {

    const {t} = useTranslation();
    const [isOpenLoginModal, setOpenLogInModal] = useState(false);

    return (
        <div className="right-container">
            <div className="header-title">
                <span className="sp1">
                    {t('page-parts.auth-part.title.word1')} 
                    <span className="sp2"> {t('page-parts.auth-part.title.word2')} </span>  
                    {t('page-parts.auth-part.title.word3')}
                </span>
            </div>
            <div className="header-body">
                <Space direction="vertical" size={"small"}>
                    <SecondaryButton className="buttons" icon={<GoogleOutlined />} buttontext={t('page-parts.auth-part.logInWithGoogle')}></SecondaryButton>
                    <Divider />
                    <SecondaryButton className="buttons" buttontext={t('page-parts.auth-part.signUp')}></SecondaryButton>
                </Space>
                <div className="right-footer">
                    <span>{t('page-parts.auth-part.haveYouAccount')}</span>
                    <PrimaryButton buttontext={t('page-parts.auth-part.logIn')} onClick={() => { setOpenLogInModal(true) }}></PrimaryButton>
                </div>
            </div>
            <LogInModal open={isOpenLoginModal} onCancel={() => { setOpenLogInModal(false)}} />
        </div>
    );
};

export default AuthPart;