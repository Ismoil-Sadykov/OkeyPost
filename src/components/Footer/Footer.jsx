import logo from '../Images/Лого.png'
import social from '../Images/Соцсети.png'

export default function Footer() {
  return (
    <div>
      <div className='md:flex justify-between p-5 mb-5 pb-10' style={{ borderBottom: "1px solid gray" }}>
        <div>
          <img src={logo} alt="" className='mb-5' />
          <img src={social} alt="" />
        </div>
        <div>
          <p className='text-[16px] font-bold mb-3'>О компании</p>
          <p className='text-[14px] mb-2'>Услуги</p>
          <p className='text-[14px] mb-2'>Цены</p>
          <p className='text-[14px] mb-2'>Отзывы</p>
          <p className='text-[14px] mb-2'>Контакты</p>
          <p className='text-[14px] mb-2'>Вакансии</p>
          <p className='text-[14px] mb-2'>Соглашение о персональных данных</p>
          <p className='text-[14px] mb-2'>Условия использования</p>
        </div>
        <div>
          <p className='text-[16px] font-bold mb-3'>Полезное</p>
          <p className='text-[14px] mb-2'>Как работает наш сервис</p>
          <p className='text-[14px] mb-2'>Как покупать с оператором</p>
          <p className='text-[14px] mb-2'>Ответы на частые вопросы</p>
          <p className='text-[14px] mb-2'>Популярные магазины</p>
          <p className='text-[14px] mb-2'>Черный список магазинов</p>
          <p className='text-[14px] mb-2'>Актуальные распродажи</p>
        </div>
        <div>
          <p className='text-[16px] font-bold mb-3'>Спецпроекты</p>
          <p className='text-[14px] mb-2'>50% на первую доставку</p>
          <p className='text-[14px] mb-2'>Скидки для постоянных клиентов</p>
          <p className='text-[14px] mb-2'>Реферальная программа</p>
          <p className='text-[14px] mb-2'>Кэшбек Mr. Rebates и Rakuten</p>
          <p className='text-[14px] mb-2'>Stop Fraud</p>
        </div>
      </div>
      <p className='text-[13px] text-center mb-5'>© 2021 Okeypost . Все права защищены.</p>
    </div>
  )
}
