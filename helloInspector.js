const currentHour = new Date().getHours();
        let greeting = "Hello";

        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Good morning";
        }
        else if (currentHour > 11 && currentHour < 17) {
            greeting = "Good afternoon";
        }
        else if (currentHour > 16 && currentHour <= 23) {
            greeting = "Good evening";
        }
        else {
            greeting = "Hello";
        }

        setTimeout(() => {
            console.clear();

            console.log(`%c\n\n\n\n\n🕵️‍♀️ \n`, "font-size: 60px;");

            console.log(`%c${greeting}, inspector \n`, "font-size: 28px; font-family: Inter; font-weight: 600");

            console.log("%cThe developer seems to be Akshar Dave.🔍 \nLast spotted at this site: https://akshar-dave.web.app/ \n\n\n\n\n\n\n\n\n\n\n", "font-size: 16px; font-family: Inter; font-weight: 400");
        }, 1000);
