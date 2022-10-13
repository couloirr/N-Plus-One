import React, { useEffect, useState } from 'react';
const [externalPopup, setExternalPopup] = useState(null);

const connectClick = (e) => {
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth — width) / 2;
    const top = window.screenY + (window.outerHeight — height) / 2.5;
    const title = `WINDOW TITLE`;
    const url = `/auth/strava`;
    const popup = window.open(url, title, `width=${width},height=${height},left=${left},top=${top}`);
    setExternalPopup(popup);
    }
   <Button onClick={connectClick}>Connect</Button>

   useEffect(() => {
    if (!externalPopup) {
      return;
    }

    const timer = setInterval(() => {
      if (!externalPopup) {
        timer && clearInterval(timer);
        return;
      }
      const currentUrl = externalPopup.location.href;
      if (!currentUrl) {
        return;
      }
      const searchParams = new URL(currentUrl).searchParams;
      const code = searchParams.get('code');
      if (code) {
        externalPopup.close();
        console.log(`The popup URL has URL code param = ${code}`);
        YourApi.endpoint(code).then(() => {
          // change UI to show after the code was stored
        })
          .catch(() => {
            // API error
          })
          .finally(() => {
            // clear timer at the end
            setExternalPopup(null);
            timer && clearInterval(timer);
          })
      }
    }, 500)
  },
  [externalPopup]
)