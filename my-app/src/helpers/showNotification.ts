import {notifications} from "@mantine/notifications";

export function showNotification(title: string) {
    notifications.show({
        title: title,
        message: ''
    })
}