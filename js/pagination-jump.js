(function () {
  'use strict'

  var PAGE_SEGMENT_RE = /\/page\/(\d+)\/?$/

  function getPageNumber(text) {
    var value = Number.parseInt(String(text || '').trim(), 10)
    return Number.isFinite(value) ? value : null
  }

  function getPages(pager) {
    return Array.prototype.map.call(
      pager.querySelectorAll('.page-number'),
      function (item) {
        return getPageNumber(item.textContent)
      }
    ).filter(function (value) {
      return value !== null
    })
  }

  function getCurrentPage(pager) {
    var current = pager.querySelector('.page-number.current')
    return current ? getPageNumber(current.textContent) || 1 : 1
  }

  function getPageTemplate(pager) {
    var links = Array.prototype.slice.call(pager.querySelectorAll('a[href]'))
    var linkedPage = links.find(function (link) {
      var url = new URL(link.getAttribute('href'), window.location.href)
      return /\/page\/\d+\/?$/.test(url.pathname)
    })

    if (linkedPage) {
      var linkedUrl = new URL(linkedPage.getAttribute('href'), window.location.href)
      return {
        path: linkedUrl.pathname,
        hash: linkedUrl.hash
      }
    }

    if (/\/page\/\d+\/?$/.test(window.location.pathname)) {
      return {
        path: window.location.pathname,
        hash: ''
      }
    }

    return null
  }

  function getTargetUrl(template, page) {
    var path = template.path
    var hash = template.hash || ''
    var match = path.match(PAGE_SEGMENT_RE)

    if (!match) return null

    var basePath = path.slice(0, match.index + 1)
    var targetPath = page === 1 ? basePath : basePath + 'page/' + page + '/'
    return targetPath + hash
  }

  function createJumpForm(currentPage, totalPage, template) {
    var form = document.createElement('form')
    form.className = 'pagination-jump'
    form.noValidate = true
    form.setAttribute('aria-label', '页码跳转')

    var label = document.createElement('span')
    label.className = 'pagination-jump__label'
    label.textContent = '跳至'

    var input = document.createElement('input')
    input.className = 'pagination-jump__input'
    input.type = 'number'
    input.inputMode = 'numeric'
    input.min = '1'
    input.max = String(totalPage)
    input.value = String(currentPage)
    input.setAttribute('aria-label', '输入页码')

    var total = document.createElement('span')
    total.className = 'pagination-jump__total'
    total.textContent = '/ ' + totalPage

    var button = document.createElement('button')
    button.className = 'pagination-jump__button'
    button.type = 'submit'
    button.title = '跳转'
    button.setAttribute('aria-label', '跳转')
    button.innerHTML = '<i class="fas fa-arrow-right fa-fw" aria-hidden="true"></i>'

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(total)
    form.appendChild(button)

    form.addEventListener('submit', function (event) {
      event.preventDefault()

      var targetPage = Number.parseInt(input.value, 10)
      if (!Number.isFinite(targetPage)) {
        input.focus()
        return
      }

      targetPage = Math.max(1, Math.min(totalPage, targetPage))
      input.value = String(targetPage)

      var targetUrl = getTargetUrl(template, targetPage)
      if (!targetUrl) return

      if (window.pjax && typeof window.pjax.loadUrl === 'function') {
        window.pjax.loadUrl(targetUrl)
      } else {
        window.location.href = targetUrl
      }
    })

    return form
  }

  function enhancePagination() {
    document.querySelectorAll('#pagination > .pagination').forEach(function (pager) {
      if (pager.querySelector('.pagination-jump')) return

      var pages = getPages(pager)
      var totalPage = Math.max.apply(null, pages)
      var template = getPageTemplate(pager)

      if (!Number.isFinite(totalPage) || totalPage <= 1 || !template) return

      pager.appendChild(createJumpForm(getCurrentPage(pager), totalPage, template))
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhancePagination)
  } else {
    enhancePagination()
  }

  document.addEventListener('pjax:complete', enhancePagination)
})()
