const arrow = document.querySelectorAll(".slider__arrow"),
    slide = document.querySelectorAll(".slider__item"),
    dots = document.querySelectorAll(".slider__dot");
let index = 0;

arrow.forEach((element) => {
    element.onclick = function () {

        if (element.classList.contains("slider__arrow_prev")) {
            if (index === 0) {
                index = slide.length - 1;
                dropActivity();
                next(index);
            } else index--;

            dropActivity();
            prev(index);
        }

        if (element.classList.contains("slider__arrow_next")) {
            if (index === slide.length - 1) {
                next(index);
                dropActivity();
                index = 0;

            } else index++;

            dropActivity();
            next(index);
        }
    }
})

function prev(index) {
    slide[index].classList.add("slider__item_active");
}

function next(index) {
    slide[index].classList.add("slider__item_active");
}

function dropActivity() {
    slide.forEach((el) => {
        el.classList.remove("slider__item_active");
    });
}

dots.forEach((e, i)=>{
    e.onclick = function() {
        dropActivity()
        prev(i)
    }
})