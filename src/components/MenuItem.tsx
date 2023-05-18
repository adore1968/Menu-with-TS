import { MenuValue } from "../shared/interfaces";

type Props = { value: MenuValue };

function MenuItem({ value }: Props) {
  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-2 xl:gap-5">
      <img
        src={value.img}
        alt={value.title}
        className="h-[166px] w-full object-cover xl:mb-0 mb-5"
      />
      <div>
        <div className="flex justify-between items-center text-lg sm:text-xl border-b border-black pb-1 mb-3">
          <h4 className="font-semibold">{value.title}</h4>
          <p className="text-amber-600">{value.price}$</p>
        </div>
        <p className="text-lg sm:text-xl">{value.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
