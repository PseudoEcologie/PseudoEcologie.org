<template>
    <Layout>
        <!-- Thêmes -->
        <div class="max-w-content mx-auto p-2">
            <h2 class="my-2">
                Les dossiers
            </h2>
            <div class="flex flex-wrap -mx-2">
                <div class="w-1/3 p-2">
                    <div class="h-200 bg-primary rounded-lg relative">
                        <h3 class="absolute bottom-0 px-3 title-card">
                            Quelle énergie ?
                        </h3>
                    </div>
                </div>
                <div class="w-1/3 p-2">
                    <div class="h-200 bg-secondary rounded-lg relative">
                        <h3 class="absolute bottom-0 px-3 title-card">
                            Qui polluent ?
                        </h3>
                    </div>
                </div>
                <div class="w-1/3 p-2">
                    <div class="h-200 bg-tertiary rounded-lg relative">
                        <h3 class="absolute bottom-0 px-3 title-card">
                            Sources de pollution
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- Articles -->
        <div class="max-w-content mx-auto p-2">
            <h2 class="my-2">
                Les articles
            </h2>
            <div class="flex flex-wrap -mx-2">
                <div v-for="article in $page.articles.edges"
                     :key="article.node.title"
                     class="w-1/2 p-2"
                >
                    <div class="bg-area rounded-lg px-4 py-3">
                        <h3 class="mt-2">
                            {{ article.node.title }}
                        </h3>
                        <p>
                            {{ article.node.description }}
                        </p>
                        <p>
                            <g-link :to="article.node.path">
                                Lire la suite.
                            </g-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-area w-full">
            <div class="max-w-content mx-auto p-2">
                <h2 class="my-2">
                    A propos
                </h2>
                <ul>
                    <li>Manifeste</li>
                    <li>Comment contribuer</li>
                    <li>Listes des contributeurs</li>
                    <li>Code source</li>
                </ul>
            </div>
        </div>
    </Layout>
</template>

<style lang="postcss">
    .title-card {
        text-shadow: 2px 2px #232530, 0 0 2px #232530;
        color: #fdf0ed;
    }
</style>

<page-query>
    query {
        articles: allArticle(sortBy: "date", order: ASC) {
            edges {
                node {
                    title
                    date
                    path
                    description
                }
            }
        }
    }
</page-query>
