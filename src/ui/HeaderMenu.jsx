import { styled } from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

export default function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li></li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
