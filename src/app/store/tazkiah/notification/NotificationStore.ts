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
            enqueue: (event) => set((state) => state.pendingEvents.push(event)),
            dequeue: (id) => set((state) => state.pendingEvents = state.pendingEvents.filter((item:Event) => (item.id !== id))),
            clearAll: () => set((state) => state.pendingEvents = [])
        })
    )
)