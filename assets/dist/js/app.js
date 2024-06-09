$(document).ready(function () {
    $('.portfolio-item a img').on('click', function () {
        $(this).toggleClass('border-active');
    });

    $('#btn-search').on('click', function () {
        let id = $('#insert-your-id').val();
        let gold = $('#insert-your-gold').val();

        switch (true) {
            case id === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar tu ID para continuar...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;

            case gold === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar la cantidad de oro...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;

            default:

                $('.quantity-gold').text(gold);
                $('#customRange1').attr('max', gold);

                $('#getInformation').removeClass('d-none');

                setTimeout(function () {
                    $('#getInformation').addClass('d-none');
                    $('#accountFound').removeClass('d-none');
                }, 3000);
        }
    })

    $('#customRange1').on('input', function () {
        let gold = $('#insert-your-gold').val();
        var value = $(this).val();
        $('#rangeValue').text(value + ' / ' + gold);
    });

    $('#btn-convert').on('click', function () {
        var rangeValue = $('#customRange1').val();

        if (rangeValue == 0) {
            Swal.fire({
                type: "warning",
                title: "Atención!",
                html: 'Debes seleccionar la cantidad para continuar...',
                showConfirmButton: false,
                timer: 2500
            });
        } else {
            $('#spinner-convert').removeClass('d-none');
            setTimeout(function () {
                $('#spinner-convert').addClass('d-none');

                Swal.fire({
                    title: "¡Listo!",
                    html: 'Se transfirieron <img src="assets/resources/img/diamond.png" width="22px" alt=""> ' + rangeValue + '.',
                    showConfirmButton: false,
                    timer: 5500
                });
            }, 3000);
        }
    });

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"  // Color blanco para las partículas
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2E86C1",  // Color verde para las líneas (efecto neón)
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});