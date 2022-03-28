@import url(https: //pro.fontawesome.com/releases/v5.11.2/css/all.css);
        : root {
            --user - button - circle: rgba(0, 0, 0, 0.025);
            --user - button - cardborder: rgba(255, 255, 255, 0.25);
            --user - button - text: #323133;

  --user-button-shadow:rgba(0,0,0,0.1);

}



body # user - button {
                z - index: 1000;
                bottom: 1 rem!important;
                right: 1 rem!important;
                color: var (--user - button - text);
                transition: 1 s 0 s ease - out; -
                webkit - animation: slide 3 s ease - out forwards;
                animation: slide 3 s ease - out forwards;
            }
            @ - webkit - keyframes slide {
                0 % , 50 % {
                    opacity: 0;
                    display: block!important;
                }
                100 % {
                    opacity: 1;
                    display: block!important;
                }
            }
            @keyframes slide {
                0 % , 50 % {
                    opacity: 0;
                    display: block!important;
                }
                100 % {
                    opacity: 1;
                    display: block!important;
                }
            }
            body# user - button.u - card {
                background: var (--user - button - background, #FFFFFF);
                border - radius: 100 % ;
                box - shadow: 0 0 1 rem - 0.25 rem
                var (--user - button - shadow),
                inset 0 0 1 rem - 0.75 rem
                var (--user - button - shadow);
            }
            body# user - button.u - main {
                cursor: pointer;
                --user - button - background: var (--user - button - main, #EC87C0);
            }
            body# user - button.u - main img {
                height: 100 % ;
                width: 100 % ;
            }
            body# user - button.u - main iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 4 rem;
                height: 4 rem;
                opacity: 1;
                transition: 0 s 4 s;
            }
            body# user - button.u - icons {
                z - index: 950;
                transform: translate(-50 % , -50 % );
                background: var (--user - button - circle);
                box - shadow: 0 0 0 0.125 rem
                var (--user - button - cardborder);
                border - radius: 100 % ;
                transition: 0.25 s;
                opacity: 1!important;
            }
            body# user - button.u - icons a {
                color: inherit;
                display: grid;
                place - items: center;
                text - decoration: none;
            }
            body# user - button.u - icons a div {
                padding: 0.5 rem;
                box - shadow: 0 0 0.5 rem - 0.25 rem
                var (--user - button - shadow);
                transition: 0 s;
            }
            body# user - button.u - icons a[href = "https://twitter.com"] div {
                    color: #1da1f2;

}

body # user - button.u - icons a[href = "https://codepen.io"] div {
                        background: black;
                        color: white;
                    }
                    body# user - button.u - icons a: hover div,
                    body# user - button.u - icons a: focus - within div {
                        box - shadow: 0 0 0 rem 0.125 rem
                        var (--user - button - cardborder);
                    }
                    body# user - button.u - icons a.u - random div {
                        -webkit - animation: diespin 2 s linear infinite;
                        animation: diespin 2 s linear infinite;
                    }
                    @ - webkit - keyframes diespin {
                        0 % {
                            transform: rotate(0 deg);
                        }
                        100 % {
                            transform: rotate(360 deg);
                        }
                    }
                    @keyframes diespin {
                        0 % {
                            transform: rotate(0 deg);
                        }
                        100 % {
                            transform: rotate(360 deg);
                        }
                    }
                    body# user - button.u - icons a.u - random: not(: hover) div {
                        -webkit - animation - play - state: paused;
                        animation - play - state: paused;
                    }
                    body# user - button.u - icons > * {
                        position: absolute;
                        width: 30 px;
                        height: 30 px;
                        background: var (--singlecolour);
                        border - radius: 100 % ;
                        cursor: pointer;
                        transform: translate(-50 % , -50 % );
                        transition: 0.25 s - 0.05 s;
                    }
                    body# user - button.u - icons > *: before {
                        position: absolute;
                        top: 50 % ;
                        left: 50 % ;
                        transform: translate(-50 % , -50 % );
                    }
                    body# user - button.u - icons > *: hover,
                    body# user - button.u - icons > *: focus - within {
                        background: var (--hcolour);
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(1): nth - child(1),
                    body# user - button.u - icons > *: first - child: nth - last - child(1) ~ *: nth - child(1) {
                        left: 25 % ;
                        top: 25 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(2): nth - child(1),
                    body# user - button.u - icons > *: first - child: nth - last - child(2) ~ *: nth - child(1) {
                        left: 37.5 % ;
                        top: 18.75 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(2): nth - child(2),
                    body# user - button.u - icons > *: first - child: nth - last - child(2) ~ *: nth - child(2) {
                        left: 18.75 % ;
                        top: 37.5 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(3): nth - child(1),
                    body# user - button.u - icons > *: first - child: nth - last - child(3) ~ *: nth - child(1) {
                        left: 50 % ;
                        top: 15.625 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(3): nth - child(2),
                    body# user - button.u - icons > *: first - child: nth - last - child(3) ~ *: nth - child(2) {
                        left: 25 % ;
                        top: 25 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(3): nth - child(3),
                    body# user - button.u - icons > *: first - child: nth - last - child(3) ~ *: nth - child(3) {
                        left: 15.625 % ;
                        top: 50 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(4): nth - child(1),
                    body# user - button.u - icons > *: first - child: nth - last - child(4) ~ *: nth - child(1) {
                        left: 62.5 % ;
                        top: 18.75 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(4): nth - child(2),
                    body# user - button.u - icons > *: first - child: nth - last - child(4) ~ *: nth - child(2) {
                        left: 37.5 % ;
                        top: 18.75 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(4): nth - child(3),
                    body# user - button.u - icons > *: first - child: nth - last - child(4) ~ *: nth - child(3) {
                        left: 18.75 % ;
                        top: 37.5 % ;
                    }
                    body# user - button.u - icons > *: first - child: nth - last - child(4): nth - child(4),
                    body# user - button.u - icons > *: first - child: nth - last - child(4) ~ *: nth - child(4) {
                        left: 18.75 % ;
                        top: 62.5 % ;
                    }
                    body# user - button: hover.u - icons,
                    body# user - button: focus - within.u - icons {
                        width: 300 % !important;
                        height: 300 % !important;
                    }