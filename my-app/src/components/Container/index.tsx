import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Description from '@/app/applications/[applicationId]/description/page';
import clsx from 'clsx';
import { Button } from '../ui/button';
import Apk from '@/app/applications/[applicationId]/Apk/page';
import Rollout from '@/app/applications/[applicationId]/rollout/page';
import Licensing from '@/app/applications/[applicationId]/licensing/page';


const Container = ({
    id,
    title,
    description,
    onAddItem,
}: ContainerProps) => {
    const {
        attributes,
        setNodeRef,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: id,
        data: {
            type: 'container',
        },
    });
    return (
      
        <div
        {...listeners}
            {...attributes}
            ref={setNodeRef}
            style={{
                transition,
                transform: CSS.Translate.toString(transform),
            }}
            className={clsx(
                'w-full h-full p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4',
                isDragging && 'opacity-50',
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                    {/* <h1 className="text-gray-800 text-xl">{title}</h1> */}
                </div>
                {
        {
          'app-apk': <Apk />,
          'app-rollout': <Rollout />,
        'app-description':<Description/>,
        'app-licensing':<Licensing/>

        }[id]
      }

                {/* <button
                    className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
                    {...listeners}
                >
                    Drag Handle
                </button> */}
            </div>

            {/*   
      <Button variant="ghost" onClick={onAddItem}>
        Add Item
      </Button> */}
        </div>
      

    );
};

export default Container;