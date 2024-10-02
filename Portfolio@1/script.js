
        // Updated Music Portfolio Image Change and Link Update Every 5 Seconds
        var musicPortfolioImages = [
            { src: "MusicPort/musicPort01.PNG", link: "https://youtu.be/RfCKYZIJj40?si=i0IwY9lF3801aL2e" },
            { src: "MusicPort/MusicPort02.PNG", link: "https://youtu.be/8YzUsWKPfw4?si=Hhiod5cFlC2nDSg_" },
            { src: "MusicPort/MusicPort.03.PNG", link: "https://youtu.be/0qci1UQIWhE?si=jrHpUu2vtG2Fdq4-" },
            { src: "MusicPort/MusicPort.04.PNG", link: "https://youtu.be/fDWv24jW_jw?si=FQW4UHVnMkQ6xqzk" },
            { src: "MusicPort/MusicPort.05.PNG", link: "https://youtu.be/UTK-l9BuzDQ?si=_voeoCMzHqGA8_vE" },
            { src: "MusicPort/MusicPort.06.PNG", link: "https://youtu.be/5pAXxJOMyIQ?si=-qUhS_uwyKafObaN" },
            { src: "MusicPort/MusicPort.07.JPG", link: "https://youtu.be/kgVMX__jULg?si=-erhAdzhL_rxZTOv" },
            { src: "MusicPort/MusicPort08.PNG", link: "https://youtu.be/qPe8ty9DajU?si=Rj0FjaGSoDhe1aNO" }
        ];
        var musicPortfolioIndex = 0;
        function changeMusicPortfolioImage() {
            document.getElementById("musicPortfolioImg").src = musicPortfolioImages[musicPortfolioIndex].src;
            document.getElementById("musicLink").href = musicPortfolioImages[musicPortfolioIndex].link;
            musicPortfolioIndex = (musicPortfolioIndex + 1) % musicPortfolioImages.length;
        }
        setInterval(changeMusicPortfolioImage, 5000);  // Updated to 5 seconds
    
        // Update interview images and links
        var interviewImages = [
            { src: "interView/inter01.PNG", link: "https://youtu.be/zjeuuj_iSUU?si=2MYgeTejqfeLJALE" },
            { src: "interView/inter02.PNG", link: "https://youtu.be/yoittQ1tQVo?si=AYTQBXb0sk3JCzWp" }
        ];
        var interviewIndex = 0;
        function changeInterviewImage() {
            document.getElementById("interviewImg").src = interviewImages[interviewIndex].src;
            document.getElementById("interviewLink").href = interviewImages[interviewIndex].link;
            interviewIndex = (interviewIndex + 1) % interviewImages.length;
        }
        setInterval(changeInterviewImage, 5000);  // Update every 5 seconds

