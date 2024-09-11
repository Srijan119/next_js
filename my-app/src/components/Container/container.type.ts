import { UniqueIdentifier } from '@dnd-kit/core';

export default interface ContainerProps {
  id: UniqueIdentifier;
  title?: string;
  description?: string;
  onAddItem?: () => void;
}