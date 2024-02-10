import React, { useState } from 'react'
// images 
import img1 from '../../../public/img/gallery/01.jpg'
import img2 from '../../../public/img/gallery/02.jpg'
import img3 from '../../../public/img/gallery/03.jpg'
import img4 from '../../../public/img/gallery/04.jpg'
import img5 from '../../../public/img/gallery/05.jpg'
import img6 from '../../../public/img/gallery/06.jpg'
import img7 from '../../../public/img/gallery/07.jpg'
import img8 from '../../../public/img/gallery/08.jpg'

const Filter = () => {
    const all = [
        {
            img: img1,
            title: 'Fusce dictum finibus',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$45 / $55'

        },
        {
            img: img2,
            title: 'Aliquam sagittis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$65 / $70'
        },
        {
            img: img3,
            title: 'Sed varius turpis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$30.50'
        },
        {
            img: img4,
            title: 'Aliquam sagittis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$25.50'
        },
        {
            img: img5,
            title: 'Maecenas eget justo',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$80.25'
        },
        {
            img: img6,
            title: 'Quisque et felis eros',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$20 / $40 / $60'
        },
        {
            img: img7,
            title: 'Sed ultricies dui',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$94'
        },
        {
            img: img8,
            title: 'Donec porta consequat',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            sum: '$15'
        },

    ]
    const salad = [
        {
            img: img4,
            title: 'Salad Menu One',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$25'
        },
        {
            img: img3,
            title: 'Second Title Salad',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$30'
        },
        {
            img: img5,
            title: 'Third Salad Item',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$45'
        },
        {
            img: img3,
            title: 'Superior Salad',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$50'
        },
        {
            img: img8,
            title: 'Sed ultricies dui',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$55 / $60'
        },
        {
            img: img7,
            title: 'Maecenas eget justo',
            text: 'Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique',
            sum: '$75'
        },


    ]
    const noodle = [
        {
            img: img8,
            title: 'Noodle One',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$12.50'
        },

        {
            img: img7,
            title: 'Noodle Second',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$15.50'
        },
        {
            img: img6,
            title: 'Third Soft Noodle',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$20.50'
        },
        {
            img: img5,
            title: 'Aliquam sagittis',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$30.25'
        },
        {
            img: img4,
            title: 'Maecenas eget justo',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$35.50'
        },
        {
            img: img3,
            title: 'Quisque et felis eros',
            text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            sum: '$40.50'
        },




    ]
    const [data, setData] = useState(all)
    const [active, setActive] = useState('all')
    const handleAll = () => {
        setData(all)
        setActive('all')
    }
    const handleSalad = () => {
        setData(salad)
        setActive('salad')
    }
    const handleNoodle = () => {
        setData(noodle)
        setActive('noodle')
    }
    return (
        <div className=''>
            <div className='flex items-center mt-[67px] gap-x-[20px] gap-y-[11px] justify-center px-[2.1rem] flex-wrap md:gap-x-[1.5rem] lg:gap-x-[1.3rem]'>
                <button onClick={() => { handleAll() }} className={`py-[9px] px-[31px] justify-center items-center border-[#2F956D] border ${active === 'all'  ? 'text-[#fff] bg-[#2f956d]' : 'text-[#2F956D]'}`}>Pizza</button>
                <button onClick={() => { handleSalad() }} className={`py-[9px] px-[31px] justify-center items-center border-[#2F956D] border ${active === 'salad'  ? 'text-[#fff] bg-[#2f956d]' : 'text-[#2F956D]'}`}>Salad</button>
                <button onClick={() => { handleNoodle() }} className={`py-[9px] px-[31px] justify-center items-center border-[#2F956D] border ${active===  'noodle'  ? 'text-[#fff] bg-[#2f956d]' : 'text-[#2F956D]'}`}>Noodle</button>
            </div>
            <div className='grid md:grid-cols-3 md:justify-start md:items-start md:gap-y-[63px] lg:grid-cols-4 md:gap-x-[30px] mt-[50px] gap-[65px] items-center justify-center'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='w-[250px] md:w-[239px]'>
                            <img className='md:w-[240px] xl:w-[235px]' src={item.img} alt="" />
                            <div className='md:w-[240px]'>
                                <p className='text-[1.4rem] font-normal text-[#1A6692]  mt-[21px]'>{item.title}</p>
                                <p className='text-[1rem] text-[#626364] leading-[1.77] lg:leading-[1.7] lg:tracking-[0.01em]  mt-[11px] xl:leading-[1.75]'>{item.text}</p>
                                <p className='text-[1.30rem] text-[#2F956D] mt-[20px] lg:mt-[22px]'>{item.sum}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filter