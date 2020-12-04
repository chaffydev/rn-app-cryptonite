import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;
export const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.accent};
  font-size: 20px;
  margin: 10%;
`;

export const UserText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
  margin: 10%;
`;

export const InputBox = styled.TextInput`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  font-size: ${(props) => props.theme.font.sizes.medium};
  border-color: #d3d3d3;
  border-bottom-width: 1px;
`;

export const InputPasswordContainer = styled.View`
  width: 100%;
  margin: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
  padding-vertical: 10px;
  border-width: 1px;
  border-radius: 5px;
  width: 100%;
  flex-direction: row;
`;

export const RegisterButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const LoaderWrapper = styled.View`
  margin-left: 15px;
`;

export const RegisterButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InputsContainer = styled.View`
  flex: 2;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 30%;
  align-items: center;
  justify-content: flex-end;
`;

export const Profil = styled.Image``;
