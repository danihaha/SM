jQuery(document).ready(function($) {


    $(document).on('click','.menu li',function(){
        if($(window).width()<=800){
            fechaMMenu()
        }
        objId=$(this).attr('id')
        idLen=objId.length
        idPai=objId.slice(3,idLen)
        $('html, body').animate({scrollTop: $('#'+idPai).offset().top-48 }, 1000);
    })

    $(window).scroll(function(){
        diffAnt=0
        nAtual=0
        nScroll=$(window).scrollTop()
        diff=0
        wH3=$(window).height()/3
        ftH=$('.footer').height()

        console.log($(window).scrollTop()+'>='+(($(document).height()-ftH)-$(window).height()))
        if($(window).scrollTop()>=(($(document).height()-ftH)-$(window).height())){
            $('.ativo').removeClass('ativo')
            $('.menu li').last().addClass('ativo')
             console.log('1')
        }else{
            console.log('2')
            $('.fixo').each(function(){
                if(($(window).scrollTop()+wH3) > $(this).offset().top){
                    $('.ativo').removeClass('ativo')
                    $('#bt-'+$(this).attr('id')).addClass('ativo')
                }
            })
        }
    })
    function modalPos(){
        margem=40
        topo=40
        if($(window).width()<680){
            margem = 0
        }
        modalW=$(window).width()-margem
        modalH=$(window).height()-((margem*2)+topo)
        if(modalW>680){
            modalW=680
        }
        modalL=($(window).width()/2)-(modalW/2)
        $('.modal-inscricoes,.modal-lancamento,.modal-como-chegar,.modal-restaurante,.modal-hospedagem,.modal-perguntas').css({'top':topo+margem, left:modalL, 'width':modalW, 'height':modalH})
        $('.modal-inscricoes .top,.modal-lancamento .top, .modal-como-chegar .top, .modal-restaurante .top,.modal-hospedagem .top,.modal-perguntas .top').css({'width':modalW})
        $('.modal-inscricoes iframe,.modal-lancamento iframe, .modal-como-chegar iframe, .modal-restaurante iframe,.modal-hospedagem iframe,.modal-perguntas iframe').attr('width',modalW,'height',modalH)
    }

    $('.inscrevase').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-inscricoes').show()
        $('.modal-bg').show()
    })

    $('.lancamento').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-lancamento').show()
        $('.modal-bg').show()
    })

    $('.bt-como-chegar').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-como-chegar').show()
        $('.modal-bg').show()
    })


    $('.bt-restaurante').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-restaurante').show()
        $('.modal-bg').show()
    })

    $('.bt-hospedagem').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-hospedagem').show()
        $('.modal-bg').show()
    })

    $('.bt-perguntas').click(function(){
        modalPos()
        $('body').addClass('no-scroll').css({'overflow':'hidden'})
        $('.modal-perguntas').show()
        $('.modal-bg').show()
    })

    $('.modal-bg, .fechar ').click(function(){
        $('.modal-inscricoes,.modal-lancamento,.modal-como-chegar,.modal-restaurante,.modal-hospedagem,.modal-perguntas').hide()
        $('.modal-bg').hide()
        $('body').removeAttr('style')
    })

    $('.box-slide .top').click(function(){
        pai=$(this).parent();
        irm=$(this).next('div')
        if(pai.hasClass('open')){
            irm.slideUp('easing')
            pai.removeClass('open')
        }else{
            irm.slideDown('easing')
            $('.box-slide.open .child').slideUp('easing')
            $('.box-slide.open').removeClass('open')
            pai.addClass('open')

        }
    })
})