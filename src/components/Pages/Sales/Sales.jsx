
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { url } from '../../const/const';
import { useEffect, useState } from 'react';
import axios from 'axios';
import whatsApp from '../../Images/Ватсап.png'
import viber from '../../Images/Вайбер.png'
import chat from '../../Images/Чат.png'


export default function Sales() {
    const [users, setUsers] = useState([])

    async function getUsers() {
        try {
            const { data } = await axios.get(url)
            setUsers(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <section className="max-w-6xl mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white rounded-2xl p-6 sm:p-8 md:p-16 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                    <div className="md:flex-1 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm sm:text-base">
                            <Link to={"/"}>
                                <p className="cursor-pointer hover:underline">Главная</p>
                            </Link>
                            <p>/</p>
                            <p>Распродажи</p>
                        </div>
                        <h1 className="mt-4 text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-tight">
                            Распродажи
                        </h1>
                        <p className="mt-3 text-base sm:text-lg opacity-95">ранний доступ к распродажам в магазинах%</p>
                        <div className="flex justify-center md:justify-start">
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: "#00D981",
                                    color: "white",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    borderRadius: "36px",
                                    width: "200px",
                                    height: "40px",
                                    margin: "20px"
                                }}
                            >
                                Получить адрес в UK
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='p-5'>
                <p className='md:text-[44px] font-bold text-[22px] md:font-extrabold mt-5 mb-15'>Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!</p>
                <div className='flex flex-wrap gap-5'>
                    {users.map((user) => {
                        return (
                            <div key={user.id} className='md:flex gap-5 items-center w-[600px]'>
                                <img src={user.image} alt="" className='w-[240px]' />
                                <div>
                                    <p className='text-[18px] font-bold mb-5'>{user.name}</p>
                                    <p className='text-[16px] mb-5'>{user.desc}</p>
                                    <p className='text-[14px]'><span className='font-bold'>Дата: </span>{user.data}</p>
                                    <p className='text-[14px]'><span className='font-bold'>Город: </span>{user.city}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 mt-15 mb-10">
                <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold">Остались вопросы? Спросите нас в соцсетях!</h4>
                </div>
                <div className="flex justify-center sm:justify-end gap-4">
                    <img src={whatsApp} alt="" className="w-8 sm:w-10" />
                    <img src={viber} alt="" className="w-8 sm:w-10" />
                    <img src={chat} alt="" className="w-8 sm:w-10" />
                </div>
            </div>
        </div>
    )
}
