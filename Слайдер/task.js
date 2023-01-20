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
                move(index);
            } else index--;

            dropActivity();
            move(index);
        }

        if (element.classList.contains("slider__arrow_next")) {
            if (index === slide.length - 1) {
                move(index);
                dropActivity();
                index = 0;

            } else index++;

            dropActivity();
            move(index);
        }
    }
})

function move(index) {
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
        move(i)
    }
})