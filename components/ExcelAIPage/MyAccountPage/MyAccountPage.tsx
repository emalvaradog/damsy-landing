import React, { useEffect, useState } from "react";
import styles from "./MyAccountPage.module.css";

export function MyAccountPage() {
    return <div className={styles.Page}>

        <div className={styles.userIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A7AAB1" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>

        <div className={styles.container}>
            <h2>Correo</h2>
            <div className={styles.inputWithIcon}>
                <input value={"rncb0963@gmail.com"} readOnly type="text" contentEditable={false} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E9EAEC" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div className={styles.extrapad}></div>
            </div>

            <h2>Plan actual</h2>

            <div className={styles.plans}>
                <div className={styles.plan}>
                    <div className={styles.planvert}>
                        <h3 className={styles.planName}>Gratis</h3>
                        <h3 className={styles.planDesc}>(Limitado)</h3>
                    </div>
                    <div className={styles.planvert}>
                    <div className={styles.badPadding}></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
}