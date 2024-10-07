document.addEventListener("DOMContentLoaded", () => {
    const selects = $(".js-custom-select");

    selects.select2({
        minimumResultsForSearch: -1
    });

    const myModal = new HystModal({
        linkAttributeName: "data-hystmodal"
    });
});
