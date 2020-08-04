<template>
    <header class="max-w-logo mx-auto px-2">
        <h1 class="text-3xl leading-none font-body font-black my-4">
            <a href="/" class="logo border-0">
                <span class="beige">Non</span> à<br />
                l'<span class="beige">Ecologie</span><br />
                de <span class="beige">Facade</span>
            </a>
        </h1>
    </header>
</template>

<style lang="postcss">
    .logo {
        text-shadow: 3px 3px #fff, 0 0 2px #fff;
        color: #232530;

        &:hover {
            text-shadow: 3px 3px #232530, 0 0 2px #232530;
            color: #fff;
        }

        &:hover .beige {
            color: #232530;
            text-shadow: 3px 3px #fff, 0 0 2px #fff;
        }
    }

    .beige {
        text-shadow: 3px 3px #232530, 0 0 2px #232530;
        color: #fff;
    }

    .green {
        text-shadow: 3px 3px #fff, 0 0 2px #fff;
        color: #1eb980;
    }
</style>
