const mainImage = document.querySelector(".first_block_main_image");
const Body = document.querySelector("body");
const video = document.querySelector(".second_block_video");
const circle = document.querySelector(".second_block_circle");
const firstImageOff = document.querySelector(".blurry_image_for_video");
const secondImageOff = document.querySelector(".second_block_ripples");

let arr = [];
let str = "";
let type_1 = navigator.userAgent;
console.log(type_1.split());

let count_2 = 0;
let count_3 = 0;

for (let index = 0; index < type_1.length; index++){
    if (type_1[index] == "/" || type_1[index] == "(" || type_1[index] == ")" || type_1[index] == "_" || type_1[index] == " " || type_1[index] == "." || type_1[index] == "0" || type_1[index] == "1" || type_1[index] == "2" || type_1[index] == "3" || type_1[index] == "4" || type_1[index] == "5" || type_1[index] == "6" || type_1[index] == "7" || type_1[index] == "8" || type_1[index] == "9"){
        arr.push(str);
        str = "";
        continue;
    } else{
        str += type_1[index];
    };
};

for (let index = 0; index < arr.length; index ++){
    if (arr[index] == ""){
        delete arr[index];
    };
};

for (let index = 0; index < arr.length; index++){
    if (arr[index] == "Safari"){
        count_2 += 1;
        for (let index_2 = 0; index_2 < arr.length; index_2++){
            if (arr[index_2] == "Chrome"){
                delete arr[index_2];
            };
        };
    };
    if (arr[index] == "Chrome"){
        count_3 += 1;
        for (let index_2 = 0; index_2 < arr.length; index_2++){
            if (arr[index_2] == "Safari"){
                delete arr[index_2];
            };
        };
    };
};

let count = 0;

if (count_3 > 0){
    video.addEventListener("click", function(event){
        video.setAttribute("controls", "");
        circle.style.display = "none";
        firstImageOff.style.display = "none";
        secondImageOff.style.display = "none";
    });
};

if (count_2 > 0){
    video.addEventListener("click", function (event){
        video.setAttribute("controls", "");
        if (count % 2 == 0){
            video.play();
        } else{
            video.pause();
        };
        count += 1;
        if (count == 10){
            count = 0;
        }
        circle.style.display = "none";
        firstImageOff.style.display = "none";
        secondImageOff.style.display = "none";
    });
};

const menuBurger = document.querySelector(".menu_burger");
const menuSubList = document.querySelector(".menu_sub_list");
const arr_opacity = document.querySelectorAll(".opacity");
const inscription = document.querySelector(".first_block_inscription");
const firstText = document.querySelector(".first_block_text");

let count_4 = 0;

menuBurger.addEventListener("click", function(event){
    menuSubList.classList.toggle("active");
    for (let index = 0; index < arr_opacity.length; index++){
        arr_opacity[index].classList.toggle("opacity_2");
    };
    if (count_4 % 2 == 0){
        inscription.style.opacity = "0.2";
        firstText.style.opacity = "0.2";
        mainImage.style.opacity = "0.2";
        Body.classList.add("overflow");
    } else{
        inscription.style.opacity = "0.8";
        firstText.style.opacity = "0.6";
        mainImage.style.opacity = "0.8";
        Body.classList.remove("overflow");
    };
    count_4 += 1;
    if (count_4 == 10){
        count_4 = 0;
    };
});

const arr_links_1 = document.querySelectorAll(".menu_sub_list_link");

if (arr_links_1.length > 0){
    for (let index = 0; index < arr_links_1.length; index++){
        arr_links_1[index].addEventListener("click", function(event){
            for (let index_2 = 0; index_2 < arr_opacity.length; index_2++){
                arr_opacity[index_2].classList.remove("opacity_2");
                if (arr_links_1[index].textContent.toLowerCase() == arr_opacity[index_2].id.toLowerCase()){
                    arr_opacity[index_2].scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    });
                };
                inscription.style.opacity = "0.8";
                firstText.style.opacity = "0.6";
                mainImage.style.opacity = "0.8";
                Body.classList.remove("overflow");
                menuSubList.classList.remove("active");
            };
            event.preventDefault();
            count_4 += 1;
        });
    };
};

const arr_links_2 = document.querySelectorAll(".menu_link");

if (arr_links_2.length > 0){
    for (let index = 0; index < arr_links_2.length; index++){
        arr_links_2[index].addEventListener("click", function(event){
            for (let index_2 = 0; index_2 < arr_opacity.length; index_2++){
                if (arr_links_2[index].textContent.toLowerCase() == arr_opacity[index_2].id.toLowerCase()){
                    arr_opacity[index_2].scrollIntoView({
                        block: "start",
                        inline: "nearest",
                        behavior: "smooth"
                    });
                };
                inscription.style.opacity = "0.8";
                firstText.style.opacity = "0.6";
                mainImage.style.opacity = "0.8";
                Body.classList.remove("overflow");
            };
            event.preventDefault();
            count_4 += 1;
        });
    };
};

const firstContainer = document.querySelector("#first_container");
const secondContainer = document.querySelector("#second_container");
const firstWrappers = document.querySelectorAll(".first_wrapper");
const secondWrappers = document.querySelectorAll(".second_wrapper");
const firstTitle = document.querySelector("#first_title");
const secondTitle = document.querySelector("#second_title");
const arrow_1 = document.querySelector(".footer_item_arrow_1");
const arrow_2 = document.querySelector(".footer_item_arrow_2");

let count_5 = 0;
let count_6 = 0;

arrow_1.addEventListener("click", function(event){
    if (count_5 % 2 == 0){
        firstContainer.classList.add("change_position");
        for (let index = 0; index < firstWrappers.length; index++){
            firstWrappers[index].style.marginBottom = "8px";
        };
        arrow_1.classList.add("rotation");
    } else{
        firstContainer.classList.remove("change_position");
        for (let index = 0; index < firstWrappers.length; index++){
            firstWrappers[index].style.marginBottom = "0px";
        };
        arrow_1.classList.remove("rotation");
    };
    count_5 += 1;
});

arrow_2.addEventListener("click", function(event){
    if (count_6 % 2 == 0){
        secondContainer.classList.add("change_position");
        for (let index = 0; index < secondWrappers.length; index++){
            secondWrappers[index].style.marginBottom = "8px";
        };
        arrow_2.classList.add("rotation");
    } else{
        secondContainer.classList.remove("change_position");
        for (let index = 0; index < secondWrappers.length; index++){
            secondWrappers[index].style.marginBottom = "0px";
        };
        arrow_2.classList.remove("rotation");
    };
    count_6 += 1;
});

const firstItem = document.querySelector("#first_item");
const secondItem = document.querySelector("#second_item");
const thirdItem = document.querySelector("#third_item");
const first_image = document.querySelector(".sixth_block_item_avatar_image_1");
const second_image = document.querySelector(".sixth_block_item_avatar_image_2");
const third_image = document.querySelector(".sixth_block_item_avatar_image_3");
const first_text = document.querySelector(".sixth_block_item_text_1");
const second_text = document.querySelector(".sixth_block_item_text_2");
const third_text = document.querySelector(".sixth_block_item_text_3");
const first_name = document.querySelector(".sixth_block_item_name_1");
const second_name = document.querySelector(".sixth_block_item_name_2");
const third_name = document.querySelector(".sixth_block_item_name_3");
const first_nik = document.querySelector(".sixth_block_item_nik_1");
const second_nik = document.querySelector(".sixth_block_item_nik_2");
const third_nik = document.querySelector(".sixth_block_item_nik_3");
const first_quotes = document.querySelectorAll(".sixth_block_item_quote_1");
const second_quotes = document.querySelectorAll(".sixth_block_item_quote_2");
const third_quotes = document.querySelectorAll(".sixth_block_item_quote_3");

firstItem.addEventListener("mouseover", function(event){
    first_image.style.opacity = "1";
    first_text.style.opacity = "1";
    first_name.style.opacity = "1";
    first_nik.style.opacity = "1";
    if (first_quotes.length > 0){
        for (let index = 0; index < first_quotes.length; index++){
            first_quotes[index].src = "html_from_figma_3_imgs/quote_2.svg";
            first_quotes[index].style.opacity = "1";
        };
    };
});

secondItem.addEventListener("mouseover", function(event){
    second_image.style.opacity = "1";
    second_text.style.opacity = "1";
    second_name.style.opacity = "1";
    second_nik.style.opacity = "1";
    if (second_quotes.length > 0){
        for (let index = 0; index < second_quotes.length; index++){
            second_quotes[index].src = "html_from_figma_3_imgs/quote_2.svg";
            second_quotes[index].style.opacity = "1";
        };
    };
});

thirdItem.addEventListener("mouseover", function(event){
    third_image.style.opacity = "1";
    third_text.style.opacity = "1";
    third_name.style.opacity = "1";
    third_nik.style.opacity = "1";
    if (first_quotes.length > 0){
        for (let index = 0; index < third_quotes.length; index++){
            third_quotes[index].src = "html_from_figma_3_imgs/quote_2.svg";
            third_quotes[index].style.opacity = "1";
        };
    };
});

firstItem.addEventListener("mouseout", function(event){
    first_image.style.opacity = "0.7";
    first_text.style.opacity = "0.6";
    first_name.style.opacity = "0.7";
    first_nik.style.opacity = "0.7";
    if (first_quotes.length > 0){
        for (let index = 0; index < first_quotes.length; index++){
            first_quotes[index].src = "html_from_figma_3_imgs/quote.svg";
            first_quotes[index].style.opacity = "0.5";
        };
    };
});

secondItem.addEventListener("mouseout", function(event){
    second_image.style.opacity = "0.7";
    second_text.style.opacity = "0.6";
    second_name.style.opacity = "0.7";
    second_nik.style.opacity = "0.7";
    if (second_quotes.length > 0){
        for (let index = 0; index < second_quotes.length; index++){
            second_quotes[index].src = "html_from_figma_3_imgs/quote.svg";
            second_quotes[index].style.opacity = "0.5";
        };
    };
});

thirdItem.addEventListener("mouseout", function(event){
    third_image.style.opacity = "0.7";
    third_text.style.opacity = "0.6";
    third_name.style.opacity = "0.7";
    third_nik.style.opacity = "0.7";
    if (third_quotes.length > 0){
        for (let index = 0; index < third_quotes.length; index++){
            third_quotes[index].src = "html_from_figma_3_imgs/quote.svg";
            third_quotes[index].style.opacity = "0.5";
        };
    };
});

const firstForm = document.querySelector("#form_1");
const secondForm = document.querySelector("#form_2");
const firstButton = document.querySelector(".seventh_block_button_wrapper");
const secondButton = document.querySelector(".footer_item_button_wrapper");
const firstInput = document.querySelector(".seventh_block_input_email");
const secondInput = document.querySelector(".footer_item_input");

let success_1 = 0;
let success_2 = 0;
let symbols_1 = 0;
let symbols_2 = 0;
let str_2 = "";
let error = 0;

firstButton.addEventListener("click", function(event){
    event.preventDefault();
    let email = firstInput.value.trim();
    if (email == ""){
        firstInput.classList.add("error");
        firstInput.parentElement.classList.add("error");
        error += 1;
    } else{
        firstInput.classList.remove("error");
        firstInput.parentElement.classList.remove("error");
        for (let index = 0; index < email.length; index++){
            if (email[index] == "@"){
                symbols_1 += 1;
                firstInput.classList.remove("error");
                firstInput.parentElement.classList.remove("error");
            };
        };
        if (symbols_1 == 1 && email.indexOf("@") > 0){
            firstInput.classList.remove("error");
            firstInput.parentElement.classList.remove("error");
            for (let index_2 = 0; index_2 < email.length; index_2++){
                if (email[index_2] != "@"){
                    str_2 += email[index_2];
                } else{
                    break;
                };
            };
            for (let index_3 = 0; index_3 < str_2.length; index_3++){
                if (str_2[index_3] == "!" || str_2[index_3] == "#" || str_2[index_3] == "$" || str_2[index_3] == "%" || str_2[index_3] == "^" || str_2[index_3] == "&" || str_2[index_3] == "*" || str_2[index_3] == "(" || str_2[index_3] == ")" || str_2[index_3] == "_" || str_2[index_3] == "-" || str_2[index_3] == "+" || str_2[index_3] == "=" || str_2[index_3] == "~" || str_2[index_3] == "[" || str_2[index_3] == "]" || str_2[index_3] == "{" || str_2[index_3] == "}" || str_2[index_3] == "." || str_2[index_3] == ","  || str_2[index_3] == "<" || str_2[index_3] == ">" || str_2[index_3] == "?" || str_2[index_3] == "/" || str_2[index_3] == "|" || str_2[index_3] == "№" || str_2[index_3] == "\\"  || str_2[index_3] == "§" || str_2[index_3] == " "){
                    firstInput.classList.add("error");
                    firstInput.parentElement.classList.add("error");
                    error += 1;
                    str_2 = "";
                } else{
                    success_1 += 1;
                };
            };
            if (success_1 == str_2.length){
                firstInput.classList.remove("error");
                firstInput.parentElement.classList.remove("error");
                let domain = email.substr(email.indexOf("@") + 1);
                if (domain.length > 0){
                    firstInput.classList.remove("error");
                    firstInput.parentElement.classList.remove("error");
                    for (let index_4 = 0; index_4 < domain.length; index_4++){
                        if (domain[index_4] == "."){
                            symbols_2 += 1;
                        };
                    };
                    if (symbols_2 == 1){
                        firstInput.classList.remove("error");
                        firstInput.parentElement.classList.remove("error");
                        let domain_2 = domain.substr(0, domain.indexOf("."));
                        console.log(domain_2.length);
                        if (domain_2 == ""){
                            firstInput.classList.add("error");
                            firstInput.parentElement.classList.add("error");
                            error += 1;
                        };
                        if (domain_2.length > 0){
                            if (domain_2 == "com" || domain_2 == "mail" || domain_2 == "yandex" || domain_2 == "rambler" || domain_2 == "gmail"){
                                success_2 += 1;
                                firstInput.classList.remove("error");
                                firstInput.parentElement.classList.remove("error");
                            } else{
                                firstInput.classList.add("error");
                                firstInput.parentElement.classList.add("error");
                                error += 1;
                            };
                        } else{
                            firstInput.classList.add("error");
                            firstInput.parentElement.classList.add("error");
                            error += 1;
                        };
                        let ending = domain.substr(domain.indexOf(".") + 1);
                        console.log(ending);
                        if (success_2 == 1){
                            if (ending == "ru" || ending == "com" || ending == "org" || ending == "net" || ending == "info" || ending == "ua" || ending == "by" || ending == "uk"){
                                firstInput.classList.remove("error");
                                firstInput.parentElement.classList.remove("error");
                            } else{
                                firstInput.classList.add("error");
                                firstInput.parentElement.classList.add("error");
                                error += 1;
                            };
                        } else{
                            firstInput.classList.add("error");
                            firstInput.parentElement.classList.add("error");
                            error += 1;
                        }
                    } else{
                        firstInput.classList.add("error");
                        firstInput.parentElement.classList.add("error");
                        error += 1;
                    };
                } else{
                    firstInput.classList.add("error");
                    firstInput.parentElement.classList.add("error");
                    error += 1;
                };
            } else{
                firstInput.classList.add("error");
                firstInput.parentElement.classList.add("error");
                error += 1;
            };
        } else{
            firstInput.classList.add("error");
            firstInput.parentElement.classList.add("error");
            error += 1;
        };
        console.log(error);
        if (error == 0){
            firstForm.submit();
        };
    };
    success_1 = 0;
    success_2 = 0;
    symbols_1 = 0;
    symbols_2 = 0;
    error = 0;
});

//---------------------------------SEPARATOR------------------------------------//

let success_3 = 0;
let success_4 = 0;
let symbols_3 = 0;
let symbols_4 = 0;
let str_3 = "";
let error_2 = 0;

secondButton.addEventListener("click", function(event){
    event.preventDefault();
    let email_2 = secondInput.value.trim();
    if (email_2 == ""){
        secondInput.classList.add("error");
        secondInput.parentElement.classList.add("error");
        error_2 += 1;
    } else{
        secondInput.classList.remove("error");
        secondInput.parentElement.classList.remove("error");
        for (let index = 0; index < email_2.length; index++){
            if (email_2[index] == "@"){
                symbols_3 += 1;
                secondInput.classList.remove("error");
                secondInput.parentElement.classList.remove("error");
            };
        };
        if (symbols_3 == 1 && email_2.indexOf("@") > 0){
            secondInput.classList.remove("error");
            secondInput.parentElement.classList.remove("error");
            for (let index_2 = 0; index_2 < email_2.length; index_2++){
                if (email_2[index_2] != "@"){
                    str_3 += email_2[index_2];
                } else{
                    break;
                };
            };
            for (let index_3 = 0; index_3 < str_3.length; index_3++){
                if (str_3[index_3] == "!" || str_3[index_3] == "#" || str_3[index_3] == "$" || str_3[index_3] == "%" || str_3[index_3] == "^" || str_3[index_3] == "&" || str_3[index_3] == "*" || str_3[index_3] == "(" || str_3[index_3] == ")" || str_3[index_3] == "_" || str_3[index_3] == "-" || str_3[index_3] == "+" || str_3[index_3] == "=" || str_3[index_3] == "~" || str_3[index_3] == "[" || str_3[index_3] == "]" || str_3[index_3] == "{" || str_3[index_3] == "}" || str_3[index_3] == "." || str_3[index_3] == ","  || str_3[index_3] == "<" || str_3[index_3] == ">" || str_3[index_3] == "?" || str_3[index_3] == "/" || str_3[index_3] == "|" || str_3[index_3] == "№" || str_3[index_3] == "\\"  || str_3[index_3] == "§" || str_3[index_3] == " "){
                    secondInput.classList.add("error");
                    secondInput.parentElement.classList.add("error");
                    error_2 += 1;
                    str_3 = "";
                } else{
                    success_3 += 1;
                };
            };
            if (success_3 == str_3.length){
                secondInput.classList.remove("error");
                secondInput.parentElement.classList.remove("error");
                let domain_3 = email_2.substr(email_2.indexOf("@") + 1);
                if (domain_3.length > 0){
                    secondInput.classList.remove("error");
                    secondInput.parentElement.classList.remove("error");
                    for (let index_4 = 0; index_4 < domain_3.length; index_4++){
                        if (domain_3[index_4] == "."){
                            symbols_4 += 1;
                        };
                    };
                    if (symbols_4 == 1){
                        secondInput.classList.remove("error");
                        secondInput.parentElement.classList.remove("error");
                        let domain_4 = domain_3.substr(0, domain_3.indexOf("."));
                        if (domain_4 == ""){
                            secondInput.classList.add("error");
                            secondInput.parentElement.classList.add("error");
                            error_2 += 1;
                        };
                        if (domain_4.length > 0){
                            if (domain_4 == "com" || domain_4 == "mail" || domain_4 == "yandex" || domain_4 == "rambler" || domain_4 == "gmail"){
                                success_4 += 1;
                                secondInput.classList.remove("error");
                                secondInput.parentElement.classList.remove("error");
                            } else{
                                secondInput.classList.add("error");
                                secondInput.parentElement.classList.add("error");
                                error_2 += 1;
                            };
                        } else{
                            secondInput.classList.add("error");
                            secondInput.parentElement.classList.add("error");
                            error_2 += 1;
                        };
                        let ending_2 = domain_3.substr(domain_3.indexOf(".") + 1);
                        if (success_4 == 1){
                            if (ending_2 == "ru" || ending_2 == "com" || ending_2 == "org" || ending_2 == "net" || ending_2 == "info" || ending_2 == "ua" || ending_2 == "by" || ending_2 == "uk"){
                                secondInput.classList.remove("error");
                                secondInput.parentElement.classList.remove("error");
                            } else{
                                secondInput.classList.add("error");
                                secondInput.parentElement.classList.add("error");
                                error_2 += 1;
                            };
                        } else{
                            secondInput.classList.add("error");
                            secondInput.parentElement.classList.add("error");
                            error_2 += 1;
                        }
                    } else{
                        secondInput.classList.add("error");
                        secondInput.parentElement.classList.add("error");
                        error_2 += 1;
                    };
                } else{
                    secondInput.classList.add("error");
                    secondInput.parentElement.classList.add("error");
                    error_2 += 1;
                };
            } else{
                secondInput.classList.add("error");
                secondInput.parentElement.classList.add("error");
                error_2 += 1;
            };
        } else{
            secondInput.classList.add("error");
            secondInput.parentElement.classList.add("error");
            error_2 += 1;
        };
        if (error_2 == 0){
            secondForm.submit();
        };
    };
    success_3 = 0;
    success_4 = 0;
    symbols_3 = 0;
    symbols_4 = 0;
    error_2 = 0;
});
