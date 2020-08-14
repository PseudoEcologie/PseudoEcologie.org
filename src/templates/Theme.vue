<template>
    <Layout>
        <article>
            <!-- hero -->
            <h2 class="content max-w-post mx-auto">
                {{ $page.theme.title }}
            </h2>
            <!-- content -->
            <div class="
                content
                max-w-post
                mx-auto
                p-2"
                 v-html="$page.theme.content"
            >
            </div>
        </article>
    </Layout>
</template>

<page-query>
    query ($id: ID!) {
        theme(id: $id) {
            title
            slug
            content
        }
    }
</page-query>
