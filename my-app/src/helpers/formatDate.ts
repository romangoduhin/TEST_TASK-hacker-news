export function formatDate(ms: number) {
    const difference = Date.now() / 1000 - ms;
    if (difference <= 0) {
        return 'right now'
    }
    if (difference < 60) {
        return (Math.floor(difference) + ' seconds ago')
    }
    if (difference < 60 * 60) {
        return (Math.floor(difference / 60) + ' minutes ago')
    }
    if (difference < 60 * 60 * 24) {
        return (Math.floor((difference / 60) * 60) + ' hours ago')
    }
    return (Math.floor((difference / 60) * 60 * 24) + ' days ago')
}

