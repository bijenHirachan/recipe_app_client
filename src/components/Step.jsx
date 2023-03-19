import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardBody, CardHeader } from '@chakra-ui/react';

function Step(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Card my={3} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardHeader>{props.id}</CardHeader>
      <CardBody></CardBody>
    </Card>
  );
}

export default Step;
