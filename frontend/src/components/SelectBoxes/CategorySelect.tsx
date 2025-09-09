const categories = ['무기', '갑옷', '투구', '망토'];

const CategorySelect = ({ value, onChange }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <select name="category" className="w-full border p-2 mb-2" value={value} onChange={onChange}>
    <option value="">부위 선택</option>
    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
  </select>
);

export default CategorySelect;
