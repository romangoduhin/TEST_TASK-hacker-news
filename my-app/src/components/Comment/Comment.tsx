import React, {useEffect, useState} from 'react';
import {getCommentByIdThunk} from "../../redux/thunks";
import {formatDate} from "../../helpers/formatDate";
import {Button, Card, Collapse, Text, Group, Avatar, Flex, Divider} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import ParsedText from "../ParsedText/ParsedText";
import {IComment, IProps} from "./Comment.types";

function Comment({id}: IProps) {
    const [comment, setComment] = useState<IComment | null>(null);

    const [opened, {toggle}] = useDisclosure(false)

    const reliesButtonText = opened ? "Collapse replies" : "Show replies";

    const avatarText = comment?.by ? comment.by.slice(0, 2) : '?';
    const time = comment?.time;
    const author = comment?.by ? comment.by : 'Anonym';
    const replies = comment?.kids;
    const text = comment?.text ? comment.text : 'Deleted';

    async function setCommentData() {
        const data = await getCommentByIdThunk(id);
        setComment(data)
    }

    useEffect(() => {
        setCommentData()
    }, [id]);

    if (!comment) return null;

    return <Card>
        <Divider my="sm"/>
        <Group mb='sm'>
            <Avatar w="50px" h="50px" radius="xl">{avatarText}</Avatar>
            {time && <Text fw={500}>{author + ' ' + formatDate(time)}</Text>}
        </Group>

        <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
        >
            <ParsedText text={text}/>

            {replies && (
                <>
                    <Button variant="subtle" onClick={toggle}>
                        {reliesButtonText}
                    </Button>

                    <Collapse in={opened}>
                        {replies.map((id: number) => (
                            <Comment key={id} id={id}/>
                        ))}
                    </Collapse>
                </>
            )}
        </Flex>
    </Card>
}

export default Comment;