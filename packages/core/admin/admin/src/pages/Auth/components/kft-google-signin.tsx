import axios from 'axios';
import { useEffect } from 'react';

const clientId = '973098536169-jn02qqnu2vqh8u359qd6d2b6hppuo7f2.apps.googleusercontent.com';

export default function KftGoogleSignin() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      if (!!google?.accounts?.id) {
        clearInterval(interval);

        console.log('Google Signin script loaded successfully');

        const google = globalThis.google;
        google.accounts.id.initialize({
          client_id: clientId,
          callback: (args) => {
            const { credential } = args;
            verifyGoogleToken(credential);
          },
          // hd: 'kfteausa.com',
        });

        const signInBtn = document.getElementById('googleLoginBtnContainer');
        if (signInBtn) {
          google.accounts.id.renderButton(signInBtn, {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
            shape: 'rectangular',
            logo_alignment: 'left',
          });
        }
      }
    }, 100);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* <h1>Google Signin</h1> */}
      <div id="googleLoginBtnContainer" style={{}}></div>
    </div>
  );
}

async function verifyGoogleToken(credential: string) {
  const url = '/api/kft-google-auth/verify';

  try {
    const resp = await axios.post<string>(url, {
      credential,
      clientId,
    });

    const { data } = resp;

    window.localStorage.setItem('jwtToken', `"${data}"`);

    location.reload();
  } catch (error) {
    alert('Error verifying Google token. Please try again.');
  }
}
