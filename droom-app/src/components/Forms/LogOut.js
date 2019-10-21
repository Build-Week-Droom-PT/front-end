import React from 'react';

export default function LogOut() {
    localStorage.removeItem('token');
    // window.location.href = "/";

}