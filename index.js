// {% invision projectId height width %}
function invisionTagRender(args) {
  const id = args[0];
  const height = args[1] != null ? args[1] : 424;
  const width = args[2] != null ? args[5] : 916;

  return `<iframe width="${width}" height="${height}" src="//invis.io/${id}" frameborder="0" allowfullscreen></iframe>`;
}

hexo.extend.tag.register('invision', invisionTagRender);


