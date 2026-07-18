import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer';

type Event = {id: string, type: string, payload: Record<string, string>};

interface NotificationStore{
    pendingEvents: Event[],
    enqueue: (event: Event) => void;
    dequeue: (id: string) => void;
    clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
    immer(
        (set) => ({
            pendingEvents: [],
            enqueue: (event) => set({pendingEvents: }),
            dequeue: (dequeue) => set({pendingEvents: }),
            clearAll: () => {},
        })
    )
)