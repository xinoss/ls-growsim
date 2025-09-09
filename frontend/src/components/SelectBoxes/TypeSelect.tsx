const types = ['일반', '레어', '유니크', '프리미엄'];

const TypeSelect = ({ value, onChange }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <select name="type" className="w-full border p-2 mb-2" value={value} onChange={onChange}>
    <option value="">타입 선택</option>
    {types.map((t) => <option key={t} value={t}>{t}</option>)}
  </select>
);

export default TypeSelect;
