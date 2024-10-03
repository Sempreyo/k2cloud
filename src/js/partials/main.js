document.addEventListener("DOMContentLoaded", () => {
    const chart1 = document.getElementById("diag1");
    const chart2 = document.getElementById("diag2");
    const chart3 = document.getElementById("diag3");
    const chart4 = document.getElementById("diag4");
    const w575 = window.matchMedia("(max-width: 575px)");
    const w767 = window.matchMedia("(max-width: 767px)");

    if (chart1) {
        new Chart(chart1, {
            plugins: [ChartDataLabels],
            type: "doughnut",
            options: {
                cutout: w575.matches ? 40 : 60,
                plugins: {
                    datalabels: {
                        color: "black",
                        font: {
                            size: w575.matches ? "7" : "8",
                        },
                        textAlign: "center",
                        formatter: function (value, context) {
                            return context.chart.data.labels[context.dataIndex] + "\n" + value + "%";
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: [
                    "Система \n электроснабжения",
                    "Система \n охлаждения",
                    "Сторонний \n провайдер",
                    "ИТ-система \n (аппаратура \n и ПО)",
                    "Сетевая \n инфраст \n руктура",
                    "Прочие"
                ],
                datasets: [{
                    data: [52, 19, 9, 8, 7, 5],
                    backgroundColor: [
                        "#30c2c6",
                        "#ac8ab2",
                        "#f0c493",
                        "#9acedc",
                        "#489bd1",
                        "#acb9c9"
                    ]
                }]
            }
        });
    }

    if (chart2) {
        new Chart(chart2, {
            plugins: [ChartDataLabels],
            type: "doughnut",
            options: {
                rotation: w767.matches ? 127 : 41,
                cutout: 30,
                plugins: {
                    datalabels: {
                        color: "black",
                        font: {
                            size: "10",
                        },
                        textAlign: "center",
                        formatter: function (value, context) {
                            return value + "%" + "\n" + context.chart.data.labels[context.dataIndex];
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: [
                    "Да",
                    "Не \n знаю",
                    "Нет"
                ],
                datasets: [{
                    data: [29, 7, 65],
                    backgroundColor: [
                        "#95d5de",
                        "#b094c4",
                        "#f9d098"
                    ]
                }]
            }
        });
    }

    if (chart3) {
        new Chart(chart3, {
            plugins: [ChartDataLabels],
            type: "bar",
            options: {
                indexAxis: "y",
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            color: "white",
                            display: !w767.matches,
                            beginAtZero: true
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        labels: {
                            index: {
                                color: "white",
                                font: {
                                    size: "14",
                                },
                                textAlign: "left",
                                formatter: function (value) {
                                    return value + "%";
                                }
                            },
                            name: w767.matches ? {
                                align: -45,
                                color: "white",
                                anchor: "start",
                                offset: 12,
                                padding: {
                                    left: 1
                                },
                                font: {
                                    size: "13",
                                },
                                textAlign: "left",
                                formatter: function (value, context) {
                                    return context.chart.data.labels[context.dataIndex];
                                }
                            } : ""
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: [
                    "Отказ ИБП",
                    ["Отказ АВР (при переключении", "с электросети)"],
                    "Отказ генератора",
                    "Отказ контроллера",
                    ["Отказ АВР", "(между путями А и В)"],
                    ["Отключение ИТ-оборудования", "с одним блоком питания"],
                    "Отказ PDU"
                ],
                datasets: [{
                    axis: "y",
                    data: [40, 27, 27, 19, 17, 15, 14],
                    fill: false,
                    barThickness: 25,
                    backgroundColor: [
                        "#166198",
                        "#16b5ec",
                        "#308bc4",
                        "#70d7f6",
                        "#a8c9da",
                        "#98dce5",
                        "#75a9c1"
                    ]
                }]
            }
        });
    }

    if (chart4) {
        new Chart(chart4, {
            plugins: [ChartDataLabels],
            type: "bar",
            options: {
                indexAxis: "y",
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: false,
                        grace: w767.matches ? 0 : 40
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        labels: {
                            index: w767.matches ? "" : {
                                align: "center",
                                color: "white",
                                font: {
                                    size: "14",
                                },
                                formatter: function(value) {
                                    if (value < 4) {
                                        return "";
                                    } else {
                                        return value + "%";
                                    }
                                }
                            },
                            name: w767.matches ? "" : {
                                align: "end",
                                anchor: "end",
                                color: "white",
                                font: {
                                    size: "13",
                                },
                                formatter: function (value, context) {
                                    return context.chart.data.labels[context.dataIndex];
                                }
                            },
                            value: w767.matches ? {
                                align: -5,
                                anchor: "start",
                                offset: 8,
                                padding: {
                                    left: 5
                                },
                                color: "white",
                                font: {
                                    size: w767.matches ? "10" : "13",
                                },
                                textAlign: "left",
                                formatter: function (value, context) {
                                    return context.chart.data.labels[context.dataIndex] + " (" + value + "%)";
                                }
                            } : ""
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: w767.matches ? [
                    "Компания (например, \n интегратор, но не вендор), \n осуществлявшая монтаж \n и/или ПНР оборудования",
                    "Независимая \n специализированная \n сервисная компания",
                    "Вендор – производитель \n оборудования",
                    "Наши собственные \n специалисты",
                    "Другое (уточните)"
                ] : [
                    ["3.91%", "Компания (например, интегратор, но не вендор), осуществлявшая монтаж", "и/или ПНР оборудования"],
                    "Независимая специализированная сервисная компания",
                    ["Вендор – производитель", "оборудования"],
                    "Наши собственные специалисты",
                    "Другое (уточните)"
                ],
                datasets: [{
                    axis: "y",
                    data: [3.91, 19.61, 68.63, 15.69, 9.8],
                    fill: false,
                    barThickness: 40,
                    backgroundColor: [
                        "#8cd6df",
                        "#ba7fb9",
                        "#ffd89d",
                        "#6fb5e6",
                        "#4e84c2"
                    ]
                }]
            }
        });
    }





    /* Ховер на свг в картинке */
    const svgParts = document.querySelectorAll(".scheme__image-hover g[data-part]");
    const tooltips = document.querySelectorAll('.tooltip');
    const hint = document.querySelector(".tooltip__hint");
    const clostBg = document.querySelector('.tooltip__closebackground');
    const clostBtn = document.querySelectorAll('.tooltip__close');

    if (svgParts && svgParts.length > 0) {
        svgParts.forEach(el => {
            el.addEventListener("click", () => {
                svgParts.forEach(el => el.classList.remove('-active', '-animate'));
                el.classList.add('-active');
                clostBg.classList.add('-open');
                tooltips.forEach(el => el.classList.remove('-open'));
                document.querySelector(".tooltip--" + el.dataset.part).classList.add("-open");
            });

            el.addEventListener("mouseover", (e) => {
                let domBlock = document.querySelector(`.tooltip--${el.dataset.part}`);
                let currentTitle = domBlock.querySelector('.tooltip__title').innerHTML;
                hint.classList.add("-open");
                hint.innerHTML = currentTitle;
            });

            el.addEventListener("mouseleave", () => {
                hint.classList.remove("-open");

            });

            el.addEventListener('mousemove', (e) => {
                hint.style.top = e.pageY - hint.offsetHeight - 30 +'px';
                hint.style.left = e.pageX - hint.offsetWidth/2 + 'px';
            });
        });

        document.addEventListener('scroll', ()=>{
            tooltips.forEach(el => el.classList.remove('-open'));
            svgParts.forEach(el => el.classList.remove('-active'));
            clostBg.classList.remove('-open');
        });

        /*Закрытие окна*/
        clostBtn.forEach(t => {
            t.addEventListener("click", () => {
                tooltips.forEach(el => el.classList.remove('-open'));
                svgParts.forEach(el => el.classList.remove('-active'));
                clostBg.classList.remove('-open');
            });
        })

        clostBg.addEventListener("click", () => {
            tooltips.forEach(el => el.classList.remove('-open'));
            svgParts.forEach(el => el.classList.remove('-active'));
            clostBg.classList.remove('-open');
        });
    }

    /* Якорь к элементу */
    /*
    const anchors = document.querySelectorAll('.anchor');

    if (anchors && anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    */
});
