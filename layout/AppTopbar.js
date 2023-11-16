import getConfig from 'next/config';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { MirrorContext } from '../contexts/MirrorContext';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const { mqttConnected } = useContext(MirrorContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <i
                    className="pi pi-circle-fill"
                    style={{
                        color: (mqttConnected ?  '#C8E6C9' : '#C63737')
                    }}></i>
            </div>
            {/*<div className="layout-topbar">
                <Link href="/" className="layout-topbar-logo">
                    <img src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
                    <span>Witch Room</span>
                </Link>

                <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                    <i className="pi pi-bars" />
                </button>

                <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                    <i className="pi pi-ellipsis-v" />
                </button>

                <div ref={topbarmenuRef}>
                    <span
                        className="p-link p-button-success"
                    >
                        <span className={`customer-badge status-${mqttConnected ? 'qualified' : 'unqualified'}`}>
                            <i className="pi pi-circle-fill"></i>
                            {mqttConnected ? 'MQTT connected' : 'MQTT disconnected'}
                        </span>
                    </span>
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                    <Link href="#settings">
                       <button type="button" className="p-link layout-topbar-button">
                            <i className="pi pi-cog"></i>
                            <span>Settings</span>
                        </button>
                    </Link>
                </div>
            </div>*/}
        </>
    );
});

export default AppTopbar;
