import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation, useRoute } from '@react-navigation/native';
// import { format } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface IRouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const route = useRoute();
  const params = route.params as IRouteParams;

  const formattedDate = useMemo(() => {
    return params.date;
    // return format(
    //   params.date,
    //   "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
    //   { locale: ptBR },
    // );
  }, [params.date]);

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento efetuado com sucesso!</Title>
      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
