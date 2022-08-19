<script lang="ts">
    import { t } from "$lib/lang"; 
</script>

<svelte:head>
    <title>{$t.TITLE}</title>

    <meta name="og:title" content="Martin - Developer" />
    <meta name="og:description" content="Woah! This is Martin's personal website" />
    <meta name="og:image" content="https://mzztin.dev/martin.png" />
    <meta property="og:url" content="https://mzztin.dev" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#D3D3D3">
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6NDVBT2QWE"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6NDVBT2QWE');
    </script>
</svelte:head>