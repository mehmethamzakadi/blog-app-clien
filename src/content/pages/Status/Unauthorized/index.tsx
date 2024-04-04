import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

interface IPrivateProps {
  children?: React.ReactNode;
  roles?: string[];
}
const PrivateRoute = ({ children, roles }: IPrivateProps) => {
  const { isAuthenticated, isAllow } = useAuth({ roles });
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={'/auth/login'} replace state={{ location }} />;
  }
  return (
    <>
      {isAllow ? children : <div>Bu sayfaya erişmenize izin verilmiyor.</div>}
    </>
  );
};
export default PrivateRoute;
