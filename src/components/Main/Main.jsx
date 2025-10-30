import { Button, Input } from '@mui/material';
import photo1 from '../Images/Иллюстрация.png'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CardsObjects from './CardsObjects/CardsObjects';
import icon1 from '../Images/Иконка.png'
import icon2 from '../Images/Иконка (1).png'
import icon3 from '../Images/Иконка (2).png'
import icon4 from '../Images/Иконка (3).png'
import icon5 from '../Images/Иконка (4).png'
import icon6 from '../Images/Иконка (5).png'
import icon7 from '../Images/Иконка (6).png'
import icon8 from '../Images/Иконка (7).png'
import icon9 from '../Images/Иконка (8).png'
import icon10 from '../Images/Иконка (9).png'
import flagRus from '../Images/фон.png'
import flagAng from '../Images/фон (1).png'
import photo2 from '../Images/Футболка.png'
import photo3 from '../Images/Куртка.png'
import photo4 from '../Images/Джинсы.png'
import photo5 from '../Images/Иллюстрация (1).png'
import photo6 from '../Images/Иллюстрация (2).png'
import photo7 from '../Images/Иллюстрация (3).png'
import photo8 from '../Images/Иллюстрация (4).png'
import photo9 from '../Images/Иллюстрация (5).png'
import photo10 from '../Images/Иллюстрация (6).png'
import Selects from './Selects/Selects';
import Mail from './Mail/Mail';
import icon11 from '../Images/Иконка (10).png'
import icon12 from '../Images/Иконка (11).png'
import icon13 from '../Images/Иконка (12).png'
import icon14 from '../Images/Иконка (13).png'
import icon15 from '../Images/Иконка (14).png'
import icon16 from '../Images/Иконка (15).png'
import CardsProducts from './CardsProducts/CardsProducts';
import Review from './Review/Review';
import axios from 'axios';
import { url } from './../const/const';
import { useEffect, useState } from 'react';

export default function Main() {

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
    <>
      <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white md:flex items-center p-5 gap-10 mt-[20px] rounded-[36px] m-5">
        <div>
          <p className='text-[25px] md:text-[55px] mb-5 font-extrabold'>Доставка товаров из Великобритании в Россию</p>
          <p className='text-[13px] md:text-[17px] mb-10'>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.</p>
          <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "260px", height: "60px" }}>Получить адрес в UK</Button>
        </div>
        <img src={photo1} alt="" className='mt-5 md:mt-0' />
      </div>
      <div className='mt-20 p-5'>
        <p className='mb-10 text-[20px] md:text-[44px] font-extrabold md:w-[500px]'>Насколько выгодно покупать?</p>
        <div className='md:flex items-center justify-between'>
          <KeyboardBackspaceOutlinedIcon sx={{ color: "#01CD7D" }} />
          <CardsObjects img={icon1} name={"Одежда"} />
          <CardsObjects img={icon2} name={"Электроника"} />
          <CardsObjects img={icon3} name={"Аксессуары"} />
          <CardsObjects img={icon4} name={"Для детей"} />
          <CardsObjects img={icon5} name={"Для спорта"} />
          <CardsObjects img={icon6} name={"Косметика"} />
          <ArrowRightAltOutlinedIcon sx={{ color: "#01CD7D" }} />
        </div>
      </div>
      <div className='p-5 md:flex items-center gap-5 md:mt-[130px]'>
        <div>
          <p className='md:text-[26px] font-bold mb-12'>Columbia Barlow Pass 550 Turbodown Jacket</p>
          <div className='flex items-center gap-5 bg-[#F2F6FC] p-5'>
            <img src={flagRus} alt="" />
            <div>
              <p className='text-[18px]'>Цена в России</p>
              <p className='md:text-[26px] font-black'>7891,46₽</p>
            </div>
          </div>
          <div className='flex items-end md:mt-[160px]'>
            <img src={photo2} alt="" className='hidden md:flex'/>
            <KeyboardBackspaceOutlinedIcon sx={{ color: "#01CD7D" }}/>
          </div>
        </div>
        <div className='text-center'>
          <img src={photo3} alt="" className='mb-[30px]' />
          <p className='md:text-[18px]'>Срок доставки примерно 10 дней</p>
          <p className='md:text-[26px] font-bold mb-5 md:mb-0'>Вы экономите до <span className='text-[#01CD7D]'>$119.56</span></p>
        </div>
        <div>
          <p className='md:text-[26px] font-bold mb-12'>Доставка одежды из Великобритании  от <span className='text-[#01CD7D]'>£7.79</span></p>
          <div className='flex items-center gap-5 bg-[#F2F6FC] p-5'>
            <img src={flagAng} alt="" />
            <div>
              <p className='md:text-[18px]'>Цена в UK</p>
              <p className='md:text-[26px] font-black text-[#01CD7D]'>£80.62</p>
            </div>
          </div>
          <div className='md:flex md:items-end md:mt-[160px] justify-end'>
            <ArrowRightAltOutlinedIcon sx={{ color: "#01CD7D" }} />
            <img src={photo4} alt="" className='hidden md:flex'/>
          </div>
        </div>
      </div>
      <div className='hidden md:flex items-center justify-around mt-20'>
        <CardsObjects img={icon7} name={"Экономия до 70%"} />
        <CardsObjects img={icon8} name={"Только подлинная продукция"} />
        <CardsObjects img={icon9} name={"Оперативная доставка"} />
        <CardsObjects img={icon10} name={"Огромный выбор товаров"} />
      </div>
      <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white md:flex items-center p-5 gap-20 mt-[100px] mb-[100px] rounded-[36px] m-5">
        <img src={photo5} alt="" />
        <div>
          <p className='md:text-[30px] mb-5 font-bold'>Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.</p>
          <p className='md:text-[17px] mb-10'>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>
          <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "260px", height: "60px" }}>Попробовать</Button>
        </div>
      </div>
      <p className='md:text-[44px] font-extrabold p-5 md:w-[1000px]'>OkeyPost удобная и быстрая доставка посылок из Великобритании </p>
      <p className='md:text-[20px] mb-[30px] p-5 md:w-[780px]'>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.</p>
      <div className='p-5 flex justify-around md:flex-row flex-col gap-5'>
        <Selects label={"Страна:"} value={"Россия"} />
        <Selects label={"Город:"} value={"Москва"} />
        <Selects label={"Индекс:"} value={"Введите индекс"} />
        <Selects label={"Вес посылки:"} value={"0,5"} />
        <Selects label={"Дополнительные услуги:"} value={"Выберите услуги"} />
      </div>
      <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "200px", height: "40px", margin: "20px" }}>Рассчитать</Button>
      <div className='p-5 mt-[70px]'>
        <p className='mb-[50px] md:text-[36px] text-[20px] font-extrabold'>Варианты доставки:</p>
        <div className='p-5'>
          <Mail img={icon11} name={"Почта России"} day={"10-14 дней"} price={"от £27.00"} allPrice={"£41.99"} />
          <Mail img={icon12} name={"EMS ПОЧТА РОССИЯ"} day={"10-12 дней"} price={"от £40.00"} allPrice={"£54.55"} />
          <Mail img={icon13} name={"Почта России"} day={"10-14 дней"} price={"от £13.00"} allPrice={"£90.50"} />
        </div>
      </div>
      <div className='p-5 mt-[50px]'>
        <p className='md:text-[44px] font-extrabold md:w-[700px] mb-6'>4 простых шага для ваших покупок в Великобритании </p>
        <div className='md:flex justify-between gap-20'>
          <CardsProducts img={photo6} name={"ВЫ ВЫБИРАЕТЕ ТОВАР"} title={"в английском магазине, оплачиваете и указываете адрес склада OkeyPost"} />
          <CardsProducts img={photo7} name={"ПОКУПКИ ПРИХОДЯТ НА СКЛАД"} title={"и появляются в вашем личном кабинете на нашем сайте"} />
          <CardsProducts img={photo8} name={"ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ"} title={"в надежной упаковке, по выгодной цене и очень быстро"} />
          <CardsProducts img={photo9} name={"ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ"} title={"в пункте выдачи, на почте или с курьером"} />
        </div>
        <p className='md:text-[20px] mt-10 md:w-[700px]'>Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.</p>
        <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "200px", height: "40px", marginTop: "30px" }}>Быстрая покупка</Button>
      </div>
      <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white md:flex items-center p-5 gap-20 mt-[100px] mb-[100px] rounded-[36px] m-5">
        <img src={photo10} alt="" />
        <div>
          <p className='md:text-[30px] mb-5 font-bold'>Виртуальный тур по нашему складу в реальном времени</p>
          <p className='md:text-[17px] mb-10'>Вы можете всегда посмотреть на нашу слаженую работу на складе</p>
          <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "260px", height: "60px" }}>Попробовать</Button>
        </div>
      </div>
      <div className='mt-[150px] p-5'>
        <p className='md:text-[44px] font-extrabold md:w-[900px]'>120 000 довольных клиентов в России уже сделали свой выбор</p>
        <p className='md:text-[20px] md:w-[600px] mt-5'>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
        <div className='md:flex mt-20'>
          <Review img={icon14} title={"Больше не значит дороже"} desc={"С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии."} />
          <Review img={icon15} title={"Быстрая обработка посылок"} desc={"Посылка обрабатывается не дольше 48 часов после поступления на склад."} />
          <Review img={icon16} title={"SMS-уведомления"} desc={"Отслеживайте весь процесс с помощью sms-уведомлений."} />
        </div>
      </div>
      <div className='p-5 mt-10'>
        <p className='text-[18px] md:text-[36px] font-extrabold mb-5'>Отзывы и цитаты блогеров:</p>
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
      <div className='p-5 mt-20'>
        <p className='md:text-[44px] font-extrabold mb-3'>Ваш личный адрес в Великобритании  для покупок</p>
        <p className='text-[13px] md:text-[18px] mb-5'>С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!</p>
        <p className='text-[13px] md:text-[18px] mb-5'>При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.</p>
        <p className='text-[13px] md:text-[18px] mb-5'>У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.</p>
        <p className='text-[13px] md:text-[18px] mb-5'>Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!</p>
      </div>
      <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white md:flex items-center p-10 gap-20 mt-[100px] mb-[100px] rounded-[36px] m-5">
        <p className='md:text-[30px] mb-5 font-bold'>Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</p>
        <Input className='md:w-[500px] w-[250px] mb-5 md:mb-0' placeholder='Введите ваш email' />
        <Button variant='contained' sx={{ backgroundColor: "#00D981", color: "white", fontSize: "13px", fontWeight: "700", borderRadius: "36px", width: "260px", height: "60px" }}>Подписаться</Button>
      </div>
    </>
  )
}
