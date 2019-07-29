config.tx_extbase {
    persistence {
        classes {
            SourceBroker\Restifynews\Domain\Model\News.mapping.tableName = tx_news_domain_model_news
            SourceBroker\Restifynews\Domain\Model\Tag.mapping.tableName = tx_news_domain_model_tag
            SourceBroker\Restifynews\Domain\Model\Category.mapping.tableName = sys_category
            SourceBroker\Restifynews\Domain\Model\FileReference.mapping.tableName = sys_file_reference
        }
    }

    objects {
        GeorgRinger\News\Domain\Model\News.className = SourceBroker\Restifynews\Domain\Model\News
        GeorgRinger\News\Domain\Model\Tag.className = SourceBroker\Restifynews\Domain\Model\Tag
        GeorgRinger\News\Domain\Model\Category.className = SourceBroker\Restifynews\Domain\Model\Category
        GeorgRinger\News\Domain\Model\FileReference.className = SourceBroker\Restifynews\Domain\Model\FileReference
    }
}

config.recordLinks.tx_restifynews_news {
    typolink {
        parameter = {$plugin.tx_restifynews.pageUid.newsDetails}
        additionalParams.data = field:uid
        additionalParams.wrap = &tx_news_pi1[controller]=News&tx_news_pi1[action]=detail&tx_news_pi1[news]=|
        useCacheHash = 1
    }
}
