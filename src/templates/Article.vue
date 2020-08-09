<template>
    <Layout>
        <article>
            <!-- hero -->
            <h2 class="content max-w-post mx-auto">
                {{ $page.article.title }}
            </h2>
            <!-- content -->
            <div class="
                content
                max-w-post
                mx-auto
                p-2"
                 v-html="$page.article.content"
            >
            </div>
        </article>
    </Layout>
</template>

<page-query>
    query ($id: ID!) {
        article(id: $id) {
            title
            slug
            description
            content
        }
    }
</page-query>
