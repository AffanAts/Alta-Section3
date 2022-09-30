import React from 'react';
import Header from "../tasks/header";

export default function About() {
    return (
        <>
        <Header/>
        <div>
            <h1 className='text-center'>About the App</h1>
            <p>In this app, you can delete, submit and edit items. To edit items, simply double clcik on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your todos items.</p>
        </div>
        </>
    )
}
