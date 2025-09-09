import EquipmentForm from '../components/EquipmentForm';
import { useIdleLogout } from '../hooks/useIdleLogout';

const Equipment = () => {
  useIdleLogout();

  return (
    <div className="min-h-screen p-4 bg-gray-200">
      <EquipmentForm />
    </div>
  );
};

export default Equipment;
