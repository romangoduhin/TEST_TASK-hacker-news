import React, {useEffect, useState} from 'react';
import {Card, Flex, Loader} from '@mantine/core';
import styles from "./NewsCard.module.scss";
import {IProps, NewsState} from "./NewsCard.type";
import {getNewsByIdThunk} from "../../redux/thunks";

function NewsCard({id}: IProps) {
    const [news, setNews] = useState<NewsState>(null);

    async function setNewsData() {
        const data = await getNewsByIdThunk(id);
        setNews(data)
    }

    useEffect(() => {
        setNewsData()
    }, [id]);

    return (
        <Card className={styles.card}>
            {news ? <Flex
                gap="lg"
                justify="flex-start"
                align="center"
                direction="column"
            >
                <p>TITLE: {news.title}</p>
                <Flex
                    gap="lg"
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <p>BY: {news.by}</p>
                    <p> DATE: {(new Date(news.time * 1000)).toLocaleString()}</p>
                </Flex>
            </Flex>
              : <Loader color="yellow" />
            }
        </Card>
    );
}

export default NewsCard;