import { Block, Text } from 'vcc-ui';

interface IIconTextProps {
  label: string;
  icon?: JSX.Element;
}

const IconText: React.FC<IIconTextProps> = ({ label, icon }) => {
  return (
    <Block className='d-flex icon-link'>
      <Text className='arrow-text' tabIndex={0}>
        {label}
      </Text>
      {icon || <img src={'/images/chevron-small.svg'} width={12} />}
    </Block>
  );
};

export default IconText;
