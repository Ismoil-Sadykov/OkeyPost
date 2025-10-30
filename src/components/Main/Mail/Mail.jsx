import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Mail({ img, name, day, price, allPrice }) {
    return (
        <div className="md:flex justify-between mb-10">
            <div className="flex items-center gap-5">
                <img src={img} alt="" />
                <p className="text-[18px] font-bold">{name}</p>
            </div>
            <div className="md:flex gap-10">
                <div style={{ borderLeft: "1px solid gray", paddingLeft: "20px" }}>
                    <p className="text-[14px]">Сроки:</p>
                    <p className="text-[20px] font-bold">{day}</p>
                </div>
                <div style={{ borderLeft: "1px solid gray", paddingLeft: "20px" }}>
                    <p className="text-[14px]">Стоимость доставки:</p>
                    <p className="text-[20px] font-bold">{price}</p>
                </div>
                <div style={{ borderLeft: "1px solid gray", paddingLeft: "20px" }}>
                    <p className="text-[14px]">Итого:</p>
                    <p className="text-[20px] font-bold">{allPrice}</p>
                </div>
                <KeyboardArrowDownIcon className='mt-5' sx={{color:"#01CD7D"}}/>
            </div>
        </div>
    )
}
